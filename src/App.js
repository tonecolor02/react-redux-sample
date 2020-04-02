import logo from './logo.svg';

// IMPORT PACKAGES

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

// IMPORT PROJECT REFERENCES

// import { AppRouter } from './routers/AppRouter';
// import { createAppStore } from './state/stores/createAppStore';
import {createAppStore} from "./components/state/stores/AppStore";
import {AppRouter} from "./components/routers/AppRouter";


// COMPONENT

function App() {
    return (
        <Provider store={createAppStore()}>
            <div className="container">
                <AppRouter/>
            </div>
        </Provider>
    );
}

export default App;
