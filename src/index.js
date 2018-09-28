import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { HomePage } from './containers';
import { Store, configAxios } from './helpers';
import 'font-awesome/scss/font-awesome.scss';   
import 'bootstrap/scss/bootstrap.scss';

configAxios();
ReactDOM.render(
    <Provider store={Store}>
        <HomePage className='main'></HomePage>
    </Provider>
    ,
    document.getElementById('root')
);
