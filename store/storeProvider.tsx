import React, { createContext, Dispatch, useReducer } from "react";
import { CoffeeStores, IStoreState } from "../types";
import { CoffeeStoresActions, LatLongActions, storeReducer } from "./reducers";

interface IStoreContext {
  state: IStoreState;
  dispatch: Dispatch<LatLongActions | CoffeeStoresActions>;
}

const initialState: IStoreState = {
  latLong: "",
  nearCoffeeStores: [],
};

export const StoreContext = createContext<IStoreContext>({
  state: initialState,
  dispatch: () => null,
});

interface IProvider {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
