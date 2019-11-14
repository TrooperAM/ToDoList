import React, {useState} from "react";
import {todoList} from "../commands/fakeTodos"
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import "../App.css"
import {push} from "connected-react-router";
import {store} from "../store/store"
import {MAX_TODO_LENGTH} from "../constants";

export default () => {
    const [todo, setTodo] = useState("");
    const handleClick = () => {
        const todoLength = todo.length;
        if (todoLength > 0 && todoLength < MAX_TODO_LENGTH) {
            todoList.push({id: new Date().getMilliseconds(), info: todo, complete: false});
            store.dispatch(push("/"));
        } else {
            alert("Wrong format, try again");
        }
    }
    return (<div className="input">
            <TextField id="standard-secondary" multiline
                       rows="4" label="New task" color="secondary" fullWidth={true}
                       onChange={(event) => setTodo(event.target.value)}/>
            <div className="createButton">
                <Button variant="contained" color="primary" onClick={() => handleClick()}>
                    Create
                </Button>
            </div>
        </div>
    )
}