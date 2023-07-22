import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import transactionsReducer from './transactionsSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        transactions: transactionsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;