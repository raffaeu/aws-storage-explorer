import { configureStore } from "@reduxjs/toolkit";

import storageReducer from "./storage/storageSlice";
import navigationReducer from "./navigation/navigationSlice";

export const store = configureStore({
    reducer: {
        storage: storageReducer,
        navigation: navigationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;