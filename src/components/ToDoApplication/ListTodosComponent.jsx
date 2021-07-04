import React, {Component} from 'react'

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this. state = {
            todos : 
            [
                {id :1 , description : "Learn 11", Done :  false, LastDate : new Date()},
                {id :2 , description : "Learn 22", Done :  false, LastDate : new Date()},
                {id :3 , description : "Learn 33", Done :  false, LastDate : new Date()},
            ]
        }
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
                                        <td> {todo.Done.toString()}</td>
                                        <td> {todo.LastDate.toString()}</td>
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