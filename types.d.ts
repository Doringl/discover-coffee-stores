import { ParsedUrlQuery } from "querystring";

export interface IVenue {
  fsq_id: string;
  location: {
    address: string;
    country: string;
    cross_street: string;
    neighborhood: Array<string>;
  };
  name: string;
}

export type CoffeeStores = Array<CoffeeStore>;

export type CoffeeStore = {
  id: number;
  name: string;
  imgUrl: string;
  address: string;
  neighborhood: Array<string>;
};
