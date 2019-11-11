import React from "react";
import {Route,Switch} from "react-router"
import ListOfTodos from "./ListOfTodos";
import NewTodo from "./NewTodo"
export default () =>{
    return(
    <Switch>
    <Route  exact path="/" render={()=><ListOfTodos/>}/>
    <Route  exact path="/new" render={()=><NewTodo/>}/>
    </Switch>)
}