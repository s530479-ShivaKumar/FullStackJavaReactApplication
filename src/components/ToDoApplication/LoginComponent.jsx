import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : 'userName',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false,
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return ( 
            <div>
                <h1>Login</h1>
                <div className="container">
                    User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.login}>Login</button>

                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentails</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}

                    {/* <ShowInvalidCreds hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCreds>
                    <LoginSuccessful showSuccessMessage={this.state.showSuccessMessage}></LoginSuccessful> */}

                </div>
            </div>
        )
    }

    login() {
        // if(this.state.userName === 'shiva' && this.state.password === 'shiva'){
        //     // this.setState(
        //     //     {
        //     //         showSuccessMessage : true,
        //     //         hasLoginFailed : false,
        //     //     }
        //     //     ) 
        //     AuthenticationService.registerSuccesfulLogin(this.state.userName, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.userName}`)
        //     }
        //     else{
        //         this.setState(
        //             {
        //                 showSuccessMessage : false,
        //                 hasLoginFailed : true,
        //             }
        //         )
        //         // this.props.history.push("/error")
        //     }

        // AuthenticationService.executeBAsicAuthenticationService(this.state.userName, this.state.password)
        // .then(() => {
        //     AuthenticationService.registerSuccesfulLogin(this.state.userName, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.userName}`)
        // }).catch( () => {
        //     this.setState(
        //         {
        //             showSuccessMessage : false,
        //             hasLoginFailed : true,
        //         }
        //     )
        // })

        AuthenticationService.executeJWTAuthenticationService(this.state.userName, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccesfulLoginForJWT(this.state.userName, response.data.token)
            this.props.history.push(`/welcome/${this.state.userName}`)
        }).catch( () => {
            this.setState(
                {
                    showSuccessMessage : false,
                    hasLoginFailed : true,
                }
            )
        })
    }



    handleChange(event) {
        console.log(this.state);
        this.setState( {
            [event.target.name] : event.target.value,
            hasLoginFailed : false
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

export default LoginComponent;