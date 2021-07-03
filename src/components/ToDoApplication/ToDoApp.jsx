import React, {Component} from 'react'

class ToDoApp extends Component {
    render() {
        return(
            <div className="ToDoApp">
                <h2>Welcome to ToDo Application</h2>
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : 'userName',
            password : ''
        }
        this.login = this.login.bind(this);
        // this.handleUserNameChange = this.handleUserNameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }
    render() {
        return ( 
            <div>
                User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }

    login() {
        console.log("Login clicked");
    }

    handleChange(event) {
        console.log(this.state);
        this.setState( {
            [event.target.name] : event.target.value
        })
    }

    // handleUserNameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         userName : event.target.value
    //     })
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password : event.target.value
    //     })
    // }


}

export default ToDoApp;