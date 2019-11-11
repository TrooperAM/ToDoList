import React from "react";
import {Link} from "react-router-dom";
import {todoList} from "../commands/fakeTodos"
export default ()=>{
    return (<>
        <input type={"text"} placeholder={"Input task"}/>
        <Link to="/">
        <input type={"button"} onClick={()=>{}} value={"Create"}/>
        </Link>
            </>
        )
}