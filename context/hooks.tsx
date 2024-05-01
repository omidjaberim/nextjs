import tokenAbi from "./tokenAbi.json";
import preSaleAbi from "./preSaleAbi.json";
import usdtAbi from "./usdtAbi.json";
import usdcAbi from "./usdcAbi.json";
import stakingAbi from "./stakingAbi.json";
import {
  tokenAddress,
  preSaleAddress,
  usdtAddress,
  usdcAddress,
  // stakingAddress,
} from "./environment";
import { readContract, writeContract } from "wagmi/actions";
import { waitForTransaction } from "@wagmi/core";

export const tokenReadFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const data = await readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  return data;
};

export const preSaleReadFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const data = await readContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    args,
  });
  return data;
};

// export const stakingReadFunction = async (
//   functionName: string,
//   args: Array<any>
// ) => {
//   const data = await readContract({
//     address: stakingAddress,
//     abi: stakingAbi,
//     functionName,
//     args,
//   });
//   return data;
// };

export const usdtReadFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const data = await readContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    args,
  });
  return data;
};

export const usdcReadFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const data = await readContract({
    address: usdcAddress,
    abi: usdcAbi,
    functionName,
    args,
  });
  return data;
};

/// write functions
export const tokenWriteFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const { hash } = await writeContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const preSaleWriteFunction = async (
  functionName: string,
  args: Array<any>,
  value: any
) => {
  const { hash } = await writeContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    args,
    value,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

// export const stakingWriteFunction = async (
//   functionName: string,
//   args: Array<any>
// ) => {
//   const { hash } = await writeContract({
//     address: stakingAddress,
//     abi: stakingAbi,
//     functionName,
//     args,
//   });
//   const receipt = await waitForTransaction({ hash });
//   return receipt;
// };

export const usdtWriteFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const { hash } = await writeContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const usdcWriteFunction = async (
  functionName: string,
  args: Array<any>
) => {
  const { hash } = await writeContract({
    address: usdcAddress,
    abi: usdcAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};
