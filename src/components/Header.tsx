import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";

export default () => {
    return (<>
        <AppBar position={"static"}>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Todo List
                </Typography>
            </Toolbar>
        </AppBar>
    </>)
}