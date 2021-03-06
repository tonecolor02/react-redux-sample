// IMPORT PACKAGE REFERENCES

import React from 'react';
import {NavLink} from 'react-router-dom';

import {makeStyles} from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js"

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "../shared/Header/Header";
import Button from "../shared/CustomButtons/Button"

const useStyles = makeStyles(styles);

// COMPONENT

export default function Navbar() {
    const classes = useStyles();
    return (<Header
        brand="청신호"
        rightLinks={
            <List className={classes.list}>
                {/*<ListItem className={classes.listItem}>
                    <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                    >
                        Discover
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                    >
                        Wishlist
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        href="#pablo"
                        className={classes.registerNavLink}
                        onClick={e => e.preventDefault()}
                        color="rose"
                        round
                    >
                        Register
                    </Button>
                </ListItem>*/}
            </List>
        }
    />);
}

export const OldNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
        <a className="navbar-brand" href="/">
            <i className="fab fa-react fa-2x" style={{color: 'dodgerblue'}}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>자동차</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/driver' activeClassName='menu selected'>운전자</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/travel' activeClassName='menu selected'>여행자</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);
