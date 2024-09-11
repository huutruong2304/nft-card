export interface ILinkItem {
  id: string;
  label: string;
}

export interface ISeller {
  id: number;
  name: string;
}

export interface ICard {
  id: number;
  name: string;
  price: number;
  unit: string;
  tier: string;
  image: string;
  theme?: string;
  seller: ISeller;
  updatedAt?: string;
  createdAt?: string;
}
