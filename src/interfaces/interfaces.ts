export interface Coin {
    symbol: string;
    price: string,
  }

export interface Chart {
  symbol: string,
  interval: string,
  title: string,
}

export interface SelectArrayItem {
  key: string;
  value: string;
}

export interface SelectArray extends Array<SelectArrayItem> {}
