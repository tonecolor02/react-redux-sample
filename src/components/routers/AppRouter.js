import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar, {OldNavbar} from '../Navbar/Navbar';
import {DirectDriverPage} from "../pages/DirectDriverPage";

import SectionCarousel from "../shared/Sections/SectionCarousel.js";

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Navbar />
            {/*<OldNavbar />*/}

            <SectionCarousel />

            <Switch>
                <Route path='/' exact={true} />
                <Route path='/driver' component={DirectDriverPage}  />
                <Route path='/travel'  />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);