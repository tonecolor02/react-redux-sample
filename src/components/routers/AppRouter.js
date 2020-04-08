import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import {DirectDriverPage} from "../pages/DirectDriverPage";

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Navbar />
            <Switch>
                <Route path='/' exact={true} />
                <Route path='/driver' component={DirectDriverPage}  />
                <Route path='/travel'  />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);