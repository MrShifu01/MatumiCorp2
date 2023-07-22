import { apiSlice } from "./apiSlice";
import { TRANSACTIONS_URL } from "../constants";

export const transactionsAPISlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: () => ({
                url: TRANSACTIONS_URL
            }),
            keepUnusedDataFor: 5,
        }),
    })
});

export const { useGetTransactionsQuery } = transactionsAPISlice;