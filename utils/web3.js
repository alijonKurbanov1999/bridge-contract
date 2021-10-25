import Web3 from 'web3';
import Web4 from '@cryptonteam/web4';
import { BigNumber } from 'bignumber.js';
import { bridge } from '~/utils/bridge';
import { erc20Abi } from '~/utils/erc20';

const { ethereum } = window;
let w3;
let web4;
const tokenEth = ['0xc13da4146d381c7032ca1ed6050024b4e324f4ef', '0x1962165823c659240aD436a758DCA6c93a1CEcF4'];
const tokenBsc = ['0x32bcbd0919bb5daa9634201468ce3e8e2fdf5db5', '0x4A42F74EA621E5Cef2aCcE6e72a882097166c13B'];

const contractAddressETH = '0xAB1D0619d1675D43CcAd6d0B412F05859F41c392';
const contractAddressBSC = '0xFff3D0609282De25B7D987A43c15C8794dA3756e';

let allTokens = [];
let userAddress;
let contractEthInstance;
let contractBscInstance;

let erc20Instance;
let contractInstance;

// eslint-disable-next-line import/prefer-default-export
export const initWallet = async () => {
  try {
    await ethereum.enable();
    w3 = new Web3(ethereum);
    web4 = new Web4();
    userAddress = await w3.eth.getCoinbase();

    await web4.setProvider(ethereum, userAddress);
    let net;
    const chainId = await w3.eth.net.getId();
    if (chainId === 4) {
      net = 'ethereum';
      allTokens = tokenEth;
      console.log('Alltokens of ETH: ', allTokens);
    } else if (chainId === 97) {
      net = 'bscscan';
      allTokens = tokenBsc;
      console.log('Alltokens of BSC: ', allTokens);
    } else {
      console.error("Please connect only on two nets: 'Ethereum' or 'BscScan'");
    }
    console.log('ChainId', chainId);
    return { userAddress, net };
  } catch (err) {
    console.error('Please connect your wallet!', err);
    return false;
  }
};

export const tokensInfo = async () => {
  try {
    // await web4.setProvider(ethereum, userAddress);
    const erc20Abstraction = await web4.getContractAbstraction(erc20Abi);

    return await Promise.all(allTokens.map(async (token, idx) => {
      const tokenInstance = await erc20Abstraction.getInstance(token);
      const symbol = await tokenInstance.symbol();
      let balance = await tokenInstance.balanceOf(userAddress);
      balance = new BigNumber(balance).shiftedBy(-18).toString();

      if (idx === tokenEth.length) {
        erc20Instance = tokenInstance;
      }

      return { balance, symbol };
    }));
  } catch (err) {
    console.error('Error of choose token is: ', err);
    return false;
  }
};

export const createBridge = async ({ amount, recipient, symbol }) => {
  try {
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(contractAddressETH);
    const nonce = await w3.eth.getTransactionCount(userAddress);
    // console.log('Nonce: ', nonce);
    // console.log('AMOUNT: ', amount);
    // console.log('RECIPIENT: ', recipient);
    // console.log('Symbol: ', symbol);
    amount = new BigNumber(amount).shiftedBy(+18);
    // console.log('amount with +18: ', amount);
    const sender = await contractInstance.swap(amount, nonce, recipient, '97', symbol);
    console.log('Sender: ', sender);
  } catch (err) {
    console.error('Error: ', err);
  }
};

export const REDEEM = async ({ amount, recipient, symbol }) => {
  try {
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(contractAddressETH);
    const nonce = await w3.eth.getTransactionCount(userAddress);
    // console.log('Nonce: ', nonce);
    // console.log('AMOUNT: ', amount);
    // console.log('RECIPIENT: ', recipient);
    // console.log('Symbol: ', symbol);
    // amount = new BigNumber(amount).shiftedBy(+18);
    // // console.log('amount with +18: ', amount);
    // const redeem = await contractInstance.redeem(amount, nonce, recipient, '4', symbol, '_v', '_r', '_s');
    // console.log('Sender: ', redeem);
  } catch (err) {
    console.error('Error: ', err);
  }
};

// const sender = await contractInstance.redeem('1000000000000000000', nonce, '0x6870C9300b2166ffECce17B0598195dA629733C3', '4', 'SUBT', '_v', '_r', '_s');
