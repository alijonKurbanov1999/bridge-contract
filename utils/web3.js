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

let CurrentTokens = [];
let CurrentAddress = '';

let userAddress;

let erc20Instance;
let contractInstance;

let NET_CHAIN = null;


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
      CurrentTokens = tokenEth;
      NET_CHAIN = 97;
      CurrentAddress = '0xAB1D0619d1675D43CcAd6d0B412F05859F41c392';
    } else if (chainId === 97) {
      net = 'bscscan';
      CurrentTokens = tokenBsc;
      NET_CHAIN = 4;
      CurrentAddress = '0xFff3D0609282De25B7D987A43c15C8794dA3756e';
    } else {
      console.error("Please connect only on two nets: 'Ethereum' or 'BscScan'");
    }

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

    return await Promise.all(CurrentTokens.map(async (token, idx) => {
      const tokenInstance = await erc20Abstraction.getInstance(token);
      const symbol = await tokenInstance.symbol();
      let balance = await tokenInstance.balanceOf(userAddress);
      balance = new BigNumber(balance).shiftedBy(-18).toString();

      if (idx === tokenEth.length - 1) {
        erc20Instance = tokenInstance;
      }

      return { balance, symbol };
    }));
  } catch (err) {
    console.error('Error of choose token is: ', err);
    return false;
  }
};

export const SWAP = async ({ amount, recipient, symbol }) => {
  try {
    console.log('test from w3')
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(CurrentAddress);
    const nonce = await w3.eth.getTransactionCount(userAddress);
    amount = new BigNumber(amount).shiftedBy(+18);
    await contractInstance.swap(amount, nonce, recipient, NET_CHAIN, symbol);
  } catch (err) {
    console.error('Error: ', err);
  }
};

export const REDEEM = async (dataRedeem) => {
  try {
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(CurrentAddress);
    dataRedeem.amount = (new BigNumber(dataRedeem.amount).shiftedBy(+18)).toString();
    await contractInstance.redeem(dataRedeem.amount, dataRedeem.nonce, dataRedeem.sender, dataRedeem.chainFrom, dataRedeem.symbol, dataRedeem.v, dataRedeem.r, dataRedeem.s );
  } catch (err) {
    console.error('Error: ', err);
    return false
  }
};
