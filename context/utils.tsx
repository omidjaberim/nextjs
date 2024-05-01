import React, { createContext, useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";

let initialState = {
  account: null,
  chainIdArray: [],
  chainId: 0,
};

interface inerStateType {
  account: `0x${string}` | null;
}
interface stateType {
  account: `0x${string}` | null;
  chainIdArray: Array<number | []>;
  chainId: number | undefined;
}

export const AppContext = createContext<stateType>(initialState);

export const ConectivityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { address, isConnected } = useAccount();
  const { chains, chain } = useNetwork();
  const chainIds = chains?.map((info) => info?.id);

  const [state, setState] = useState<inerStateType>(initialState);

  useEffect(() => {
    setState({
      account: address ?? null,
    });
  }, [isConnected, address]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        chainIdArray: chainIds,
        chainId: chain?.id,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
