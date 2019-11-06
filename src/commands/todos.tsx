import {getItemsStarting,getItemsErrored,getItemsSuccess} from "../actions/todos";
import {fakeTodos} from "./fakeTodos"
export const getItems = () =>{
   return async function(dispatch: any) {
       try{
           dispatch(getItemsStarting());
           let todos=await fakeTodos();
           dispatch(getItemsSuccess(todos));
       } catch(error){
           dispatch(getItemsErrored(error));
       }
    }
}
export const mapStateToProps = (state:any) => state.todos;

export const mapDispatchToProps = (dispatch:any) => ({
    requestItems: () => dispatch(getItems()),
});