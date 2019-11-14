import React from "react"
import {mapDispatchToProps, mapStateToProps} from "../commands/todos";
import {connect} from "react-redux";
import "../App.css"
import TodoItem from "./TodoItem";
import {TodoListItem} from "../constants";
import {Button, List} from "@material-ui/core";
import {store} from "../store/store";
import {push} from "connected-react-router";

class ListOfTodos extends React.Component {
    componentDidMount() {
        (this.props as any).requestItems();
    }

    handleClick = () => {
        store.dispatch(push("/new"));
    }

    render() {
        let {todos} = this.props as any;
        const list = todos.map((item: TodoListItem): any => {
            return <TodoItem key={item.id} id={item.id} complete={item.complete} info={item.info}/>
        });
        return (<>
            <div className={"tasks"}>
                <List>
                    {list}
                </List>
            </div>
            <div className="newTaskButton">
                <Button variant="contained" color="primary" onClick={() => this.handleClick()}>New task</Button>
            </div>
        </>);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfTodos)