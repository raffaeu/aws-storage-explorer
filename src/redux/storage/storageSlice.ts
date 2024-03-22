import { createSlice } from '@reduxjs/toolkit';
import { Account, Bucket } from './types';

interface StorageState {
    isLoading: boolean;
    accounts: Account[];
};

const initialState: StorageState = {
    isLoading: false,
    accounts: new Array<Account>()
};

export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        loadTree: (state) => {
            state.isLoading = true;
            state.accounts = [
                {
                    name: 'ABC-account-1',
                    buckets: [
                        { name: 'ABC-bucket-1' } as Bucket,
                        { name: 'DEF-bucket-2' } as Bucket,
                    ]
                } as Account,
            ]
            state.isLoading = false;
        },
    }
});

export const {
    loadTree
} = storageSlice.actions;

export default storageSlice.reducer;