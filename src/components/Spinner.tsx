import React from "react"
import {CircularProgress} from "@material-ui/core";
import "../App.css"

export default () => {
    return (<div className="spinner">
        <CircularProgress color="secondary"/>
    </div>)
}