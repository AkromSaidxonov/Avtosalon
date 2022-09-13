import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import authSlise from "./slice/authSlise";
import { authApi } from "./queries/Auth";
import { categoryApi } from "./queries/category";
import { carsApi } from "./queries/cars";


const store = configureStore({
  reducer: {
    authSlise,

    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      carsApi.middleware,
      authApi.middleware
    ),
  devTools: true,
});
export default store;
setupListeners(store.dispatch);

