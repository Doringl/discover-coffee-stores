import { CoffeeStore } from "../types";

export const isEmpty = (obj: CoffeeStore) => {
  return Object.keys(obj).length === 0;
};
