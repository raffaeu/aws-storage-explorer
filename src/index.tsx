import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from 'rsuite';
import App from './layout/App';

import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <CustomProvider theme='dark'>
        <App />
    </CustomProvider>
);