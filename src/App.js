import React from 'react';
import Routes from './Routes';
import './app/assets/style.css';

import { Provider } from 'react-redux'
import store from './app/store/user/Index.js'

function App() {
    return (
        <>
            <Provider store={store} >
                <Routes />
            </Provider>
        </>
    );
}

export default App;
