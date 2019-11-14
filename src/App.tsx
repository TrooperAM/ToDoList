import React from 'react';
import './App.css';
import Routes from "./components/Routes"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
}));


export default () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <Container component="main" className={classes.main} maxWidth="sm">
                <Routes/>
            </Container>
        </>
    )
}



