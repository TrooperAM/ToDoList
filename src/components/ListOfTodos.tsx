import React from "react"
import {mapDispatchToProps, mapStateToProps} from "../commands/todos";
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import "../App.css"
import TodoItem from "./TodoItem";
import {TodoListItem} from "../constants";
class ListOfTodos extends React.Component{
    componentDidMount(){
        (this.props as any).requestItems();
    }
    render(){
        let {todos}=this.props as any;
        const list=todos.map( (item : TodoListItem): any =>{
            return <TodoItem key={item.id} id={item.id} complete={item.complete} info={item.info}/>
        });
        return(<>
            <div className={"tasks"}>{list}</div>
            <Link to="/new">
            <input type={"button"} value={"New task"}/>
            </Link>
             </>);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfTodos)