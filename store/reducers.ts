import { CoffeeStores, IStoreState } from "../types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SET_LAT_LONG = "SET_LAT_LONG",
  SET_COFFEE_STORES = "SET_COFFEE_STORES",
}

type LatLongPayload = {
  [Types.SET_LAT_LONG]: string;
};

type CoffeeStoresPayload = {
  [Types.SET_COFFEE_STORES]: CoffeeStores;
};

export type LatLongActions =
  ActionMap<LatLongPayload>[keyof ActionMap<LatLongPayload>];

export type CoffeeStoresActions =
  ActionMap<CoffeeStoresPayload>[keyof ActionMap<CoffeeStoresPayload>];

export const storeReducer = (
  state: IStoreState,
  action: LatLongActions | CoffeeStoresActions
): IStoreState => {
  switch (action.type) {
    case Types.SET_LAT_LONG: {
      return { ...state, latLong: action.payload };
    }
    case Types.SET_COFFEE_STORES: {
      return { ...state, nearCoffeeStores: action.payload };
    }
    default:
      throw new Error(`Unhandled action type!`);
  }
};
