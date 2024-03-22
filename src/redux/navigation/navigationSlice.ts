import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tab } from './types';

interface NavigationState {
    activeTab: Tab | null;
    openTabs: Tab[];
};

const initialState: NavigationState = {
    activeTab: null,
    openTabs: new Array<Tab>()
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        openTab: (state, action: PayloadAction<Tab>) => {
            if (!state.openTabs.some(t => action.payload.label === t.label)) {
                state.openTabs.push(action.payload);
                state.activeTab = action.payload;
            } else {
                state.activeTab = action.payload;
            }
        }
    }
});

export const {
    openTab
} = navigationSlice.actions;

export default navigationSlice.reducer;