/**
 * @file project index file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './Route';
// import i18n (needs to be bundled ;))
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './Store/rootStore';
import i18n from './Locales/i18n';
import 'antd/dist/antd.css';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <RootRouter />
        </Provider>
    </I18nextProvider>,
    document.getElementById('root'),
);
