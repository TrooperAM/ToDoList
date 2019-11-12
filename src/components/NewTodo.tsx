import React, {useState} from "react";
import {Link} from "react-router-dom";
import {todoList} from "../commands/fakeTodos"
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
export default ()=>{
    const [todo,setTodo]=useState("");
    return (<>
            <TextField id="standard-secondary" label="Standard secondary" color="secondary" onChange={(event)=>setTodo(event.target.value)}/>
        <Link to="/">
        <Button  variant="contained" color="primary"  onClick={()=>{todoList.push({id: new Date().getMilliseconds(),info:todo,complete: false})}} >
            Create
        </Button>
        </Link>
            </>
        )
}