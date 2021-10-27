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
let contractEthInstance;
let contractBscInstance;

let erc20Instance;
let contractInstance;

let NET_CHAIN = null;

// const txHash = '0x18d0d3aa87cdbeb4de8e3833dbcbb8cdd630992a99d775afcdadf4246b223bda';
// const changeUrl = `https://rinkeby.etherscan.io/tx/${txHash}`;
// const txHashExample2 = '0x67c94b9471857da4514ac49cf20bf16887f0997dba56357828d2b8b26f83655d'
// const bscUrl = `https://testnet.bscscan.com/tx/${txHashExample2}`

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
      console.log('Current address is: ', CurrentAddress)
      console.log('Alltokens of ETH: ', CurrentTokens);
    } else if (chainId === 97) {
      net = 'bscscan';
      CurrentTokens = tokenBsc;
      NET_CHAIN = 4;
      CurrentAddress = '0xFff3D0609282De25B7D987A43c15C8794dA3756e';
      console.log('Current address is: ', CurrentAddress)
      console.log('Alltokens of BSC: ', CurrentTokens);
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

export const swap = async ({ amount, recipient, symbol }) => {
  try {
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(CurrentAddress);
    // contractInstance = await contractAbstraction.getInstance(contractAddressETH);
    const nonce = await w3.eth.getTransactionCount(userAddress);
    amount = new BigNumber(amount).shiftedBy(+18);
    const sender = await contractInstance.swap(amount, nonce, recipient, NET_CHAIN, symbol);
    // const sender = await contractInstance.swap(amount, nonce, recipient, '97', symbol);
    console.log('Sender: ', sender);
  } catch (err) {
    console.error('Error: ', err);
  }
};

// export const swapIn = async ({ network, hash }) => {
//   try {
//     let url;
//     if(network === 'ETH') {
//       url = `https://rinkeby.etherscan.io/tx/${hash}`
//     } else if (network === 'BSC') {
//       url = `https://testnet.bscscan.com/tx/${hash}`
//     } else {
//       console.error(`Your hash transaction ${hash} is wrong!`)
//     }
//     return {url}
//   } catch (err) {
//     console.error('Error: ', err)
//     return false
//   }
// };


export const REDEEM = async ({ _, recipient, symbol }) => {
  try {
    const contractAbstraction = await web4.getContractAbstraction(bridge);
    contractInstance = await contractAbstraction.getInstance(CurrentAddress);
    const nonce = await w3.eth.getTransactionCount('0x6870c9300b2166ffecce17b0598195da629733c3');
    const amount = (new BigNumber(7).shiftedBy(+18)).toString();
    console.log('AMOUNT: ', amount)
    const recipient = '0x6870c9300b2166ffecce17b0598195da629733c3';
    const redeem = await contractInstance.redeem(amount, nonce, recipient, '97', 'SUBT', '0x1b', "0xda9b1cf99fb7d449d5682c260c7483004344224b16ad71584465fc0566d7b85b", '0x700e8b6dcd1542f22e33f5357250dc6e6105ef7b669c1a6772cb7604d6a8e0ac');
    console.log('Sender: ', redeem);
  } catch (err) {
    console.error('Error: ', err);
  }
};
