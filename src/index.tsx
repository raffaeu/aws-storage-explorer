import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from 'rsuite';
import App from './layout/App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <CustomProvider theme='dark'>
            <App />
        </CustomProvider>
    </Provider>
);