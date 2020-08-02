import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import todoList from "../components/TodoList";
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) =>{
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(el => el.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(el => !el.completed)
        default: 
            throw new Error ("unknown filter" + filter)
    }
}

const mapStateToProps = state => ({todos: getVisibleTodos(state.todo, state.visibilityFilter)
})


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(todoList)