export interface ILinkItem {
  id: string;
  label: string;
}

export interface ISeller {
  id: number;
  name: string;
  avatar?: string;
}

export interface ICharacterStatistics {
  birthday: string;
  hometown: string;
  age: string;
  height: string;
  bloodType: string;
  status: string;
  bounty: number;
  haki: string;
  favoriteFood: string;
  additionalInfo: string;
}

export interface ICard {
  id: number;
  name: string;
  price: number;
  unit: string;
  tier: string;
  image: string;
  theme?: string;
  tags?: string;
  statistics?: Partial<ICharacterStatistics>;
  seller: ISeller;
  createdAt: string;
}

export interface ISearchParams {
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  tier?: string;
  theme?: string;
  time?: string;
  price?: string;
  page?: string;
}

export interface IPaginationParams {
  page: number;
  itemsPerPage: number;
  search?: string;
  time?: string;
  price?: string;
  minPrice?: string;
  maxPrice?: string;
}
