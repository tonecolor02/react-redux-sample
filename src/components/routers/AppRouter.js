import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navbar, {OldNavbar} from '../Navbar/Navbar';
import {DirectDriverPage} from "../pages/DirectDriverPage";

import SectionCarousel from "../shared/Sections/SectionCarousel.js";
import FloatingActionButtons from "../shared/FloatingActionButtons/FloatingActionButtons.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function AppRouter(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (<BrowserRouter>
        <Fragment >
            <Navbar/>
            {/*<OldNavbar />*/}
            <div className={classes.container}>

                <SectionCarousel/>
                <FloatingActionButtons/>
            </div>

            <Switch>
                <Route path='/' exact={true}/>
                <Route path='/driver' component={DirectDriverPage}/>
                <Route path='/travel'/>
                <Redirect to="/"/>
            </Switch>
        </Fragment>
    </BrowserRouter>);
}


/*
export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Navbar/>
            {/!*<OldNavbar />*!/}
            <div className={classes.container}>

                <SectionCarousel/>
                <FloatingActionButtons/>
            </div>

            <Switch>
                <Route path='/' exact={true}/>
                <Route path='/driver' component={DirectDriverPage}/>
                <Route path='/travel'/>
                <Redirect to="/"/>
            </Switch>
        </Fragment>
    </BrowserRouter>
);*/
