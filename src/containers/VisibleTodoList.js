import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import todoList from "../components/TodoList";

const mapStateToProps = state => ({todos: state})


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(todoList)