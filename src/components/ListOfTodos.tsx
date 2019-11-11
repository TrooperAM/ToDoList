import React from "react"
import {mapDispatchToProps, mapStateToProps} from "../commands/todos";
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

class ListOfTodos extends React.Component{
    componentDidMount(){
        (this.props as any).requestItems();
    }
    render(){
        let {todos}=this.props as any;
        const list=todos.map( (item : any): any =>{
            return <p key={item.id}><input type={"checkbox"} /> {item.info}</p>
        });
        return(<>
            <h1>{list}</h1>
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