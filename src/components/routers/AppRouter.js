import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from '../Header/Header';
import {DirectDriverPage} from "../pages/DirectDriverPage";

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' exact={true} />
                <Route path='/driver' component={DirectDriverPage}  />
                <Route path='/travel'  />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);