interface Named {
  name: string;
}

interface Wallet {
  address: string;
}

interface Account extends Named, Wallet {}

interface Asset extends Named, Wallet {
  symbol: string;
  decimals: number;
  investing: boolean;
}

interface Contract extends Named, Wallet {
  abi: any;
  voting: boolean;
}

interface Config<T> {
  [name: string]: T;
}

interface Network {
  networkName: string;
  networkUrl: string;
  networkEtherscan: string;
  networkId: number;
  accounts: Config<Account>;
  assets: Config<Asset>;
  contracts: Config<Contract>;
}

declare const _exports: {
  development: Network;
  "development-fork": Network;
  ropsten: Network;
  "ropsten-fork": Network;
  main: Network;
  "main-form": Network;
};

export = _exports;
