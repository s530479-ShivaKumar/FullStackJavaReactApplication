import React, {Component} from 'react'
import TodoDataService from '../../api/todos/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : 
            [
                // {id :1 , description : "Learn 11", Done :  false, LastDate : new Date()},
                // {id :2 , description : "Learn 22", Done :  false, LastDate : new Date()},
                // {id :3 , description : "Learn 33", Done :  false, LastDate : new Date()},

            ],
            message : null,
        }
        this.delteteToDoclicked = this.delteteToDoclicked.bind(this);
        this.updateToDoclicked = this.updateToDoclicked.bind(this);
        this.refreshtodos = this.refreshtodos.bind(this);
        this.createATo = this.createATo.bind(this);
    }

    componentDidMount() {
        this.refreshtodos();
    }

    refreshtodos() {
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
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th> id </th> */}
                                <th> Description </th>
                                <th> Done </th>
                                <th> Last Date </th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                    <tr>
                                        {/* <td> {todo.id}</td> */}
                                        <td> {todo.description}</td>
                                        <td> {todo.done.toString()}</td>
                                        <td> {moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button onClick={()=> this.updateToDoclicked(todo.id)} className="btn btn-success">Update</button></td>
                                        <td><button onClick={()=> this.delteteToDoclicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                    <div className="row">
                            <button style={{display: "flex", justifyContent: "center",alignItems: "center"}} className="btn btn-success" onClick={this.createATo}> Add</button>
                    </div>
                </div>
            </div>
        )
    }

    delteteToDoclicked(id){
        console.log("clicked delete" + id)
        let userName = AuthenticationService.getUserName();
        TodoDataService.deleteTodo(userName, id)
        .then(
            response => {
                this.setState({message : 'Deleted sucessfully.'});
                this.refreshtodos();
            }
        )
    }

    updateToDoclicked(id){
        console.log("clicked update" + id)
        this.props.history.push(`/todos/${id}`);

        // let userName = AuthenticationService.getUserName();
        // TodoDataService.deleteTodo(userName, id)
        // .then(
        //     response => {
        //         this.setState({message : `Deleted todo with ${id} sucessfully.`});
        //         this.refreshtodos();
        //     }
        // )
    }

    createATo(){
        this.props.history.push(`/todos/-1`);
    }
}

export default ListTodosComponent;