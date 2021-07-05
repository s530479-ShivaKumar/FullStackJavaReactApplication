import React, {Component} from 'react'
import TodoDataService from '../../api/todos/TodoDataService';
import AuthenticationService from './AuthenticationService';

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : 
            [
                // {id :1 , description : "Learn 11", Done :  false, LastDate : new Date()},
                // {id :2 , description : "Learn 22", Done :  false, LastDate : new Date()},
                // {id :3 , description : "Learn 33", Done :  false, LastDate : new Date()},
            ]
        }
    }

    componentDidMount() {
        const user = AuthenticationService.getUserName();
        TodoDataService.retrieveAllTodos(user)
        .then(
            response => {
                // console.log(response);
                this.setState({todos : response.data})
            }
        );

    }

    render () {
        return (
            <div>
                <h1> List of things to do</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> id </th>
                                <th> description </th>
                                <th> Done </th>
                                <th> LastDate </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                    <tr>
                                        <td> {todo.id}</td>
                                        <td> {todo.description}</td>
                                        <td> {todo.done.toString()}</td>
                                        <td> {todo.completionDate.toString()}</td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;