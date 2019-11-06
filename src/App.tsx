import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./commands/todos";

class App extends React.Component {
  componentDidMount(){
    (this.props as any).requestItems();
  }
  render(){
    let {todos}=this.props as any;
    const list=todos.map( (item : any): any =>{
      return <p key={item.id}><input type={"checkbox"} /> {item.info}</p>
    });
    return( <h1>{list}</h1>);
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
