import logo from './logo.svg';

// IMPORT PACKAGES

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

// IMPORT PROJECT REFERENCES

import {createAppStore} from "./components/state/stores/AppStore";
import {AppRouter} from "./components/routers/AppRouter";


// COMPONENT

function App() {
    return (
        <Provider store={createAppStore()}>
            <div>
                <AppRouter/>
            </div>
        </Provider>
    );
}

export default App;
