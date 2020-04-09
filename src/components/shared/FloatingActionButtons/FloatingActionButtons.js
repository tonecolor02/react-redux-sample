import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
        }
        , textAlign: "center"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    fab: {
        width: 160
    }
}));

export default function FloatingActionButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab className={classes.fab} color="primary" aria-label="add" variant="extended">
                <AddIcon className={classes.extendedIcon}/>
                자동차 다이렉트
            </Fab>
            <Fab className={classes.fab} color="secondary" aria-label="edit" variant="extended">
                <EditIcon className={classes.extendedIcon}/>
                운전자 다이렉트
            </Fab>
            {/*<Fab variant="extended">*/}
            <Fab className={classes.fab} color="secondary" aria-label="Navigation" variant="extended">
                {/*    <NavigationIcon className={classes.extendedIcon} />
                Navigate*/}
                <NavigationIcon className={classes.extendedIcon}/>
                여행자 다이렉트
            </Fab>
            {/*<Fab disabled aria-label="like">*/}
            <Fab className={classes.fab} aria-label="like" variant="extended">
                <FavoriteIcon className={classes.extendedIcon}/>
                몰라씨발
            </Fab>
        </div>
    );
}