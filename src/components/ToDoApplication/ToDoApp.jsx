import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogOutComponent from './LogOutComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';


class ToDoApp extends Component {
    render() {
        return(
            <div className="ToDoApp">
                {/* <h2>Welcome to ToDo Application</h2> */}
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" exact component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" exact component={ListTodosComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" exact component={LogOutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>    
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

// class LoginComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userName : 'userName',
//             password : '',
//             hasLoginFailed : false,
//             showSuccessMessage : false,
//         }
//         this.login = this.login.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     render() {
//         return ( 
//             <div>
//                 <h1>Login</h1>
//                 <div className="container">
//                     User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
//                     Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//                     <button className="btn btn-success" onClick={this.login}>Login</button>

//                     {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentails</div>}
//                     {this.state.showSuccessMessage && <div>Login Successful</div>}

//                     {/* <ShowInvalidCreds hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCreds>
//                     <LoginSuccessful showSuccessMessage={this.state.showSuccessMessage}></LoginSuccessful> */}

//                 </div>
//             </div>
//         )
//     }

//     login() {
//         if(this.state.userName === 'shiva' && this.state.password === 'shiva'){
//             // this.setState(
//             //     {
//             //         showSuccessMessage : true,
//             //         hasLoginFailed : false,
//             //     }
//             //     ) 
//             AuthenticationService.registerSuccesfulLogin(this.state.userName, this.state.password)
//             this.props.history.push(`/welcome/${this.state.userName}`)
//             }
//             else{
//                 this.setState(
//                     {
//                         showSuccessMessage : false,
//                         hasLoginFailed : true,
//                     }
//                 )
//                 // this.props.history.push("/error")
//             }
//     }



//     handleChange(event) {
//         console.log(this.state);
//         this.setState( {
//             [event.target.name] : event.target.value,
//             hasLoginFailed : false
//         })
//     }

//     // handleUserNameChange(event) {
//     //     console.log(event.target.value);
//     //     this.setState({
//     //         userName : event.target.value
//     //     })
//     // }

//     // handlePasswordChange(event) {
//     //     console.log(event.target.value);
//     //     this.setState({
//     //         password : event.target.value
//     //     })
//     // }

// }

// class HeaderComponent extends Component {
//     render() {

//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         return (
//             // <header>
//             //     <nav className="navbar navbar-expand-md" >
//             //         <div> <a className="navbar-brand"> Shiva</a></div>
//             //         <ul className="navbar-nav">
//             //             <li className="nav-link">Home</li>
//             //             <li className="nav-link">Todos</li>
//             //         </ul>
//             //         <ul className="navbar-nav navbar-collapse justify-content-end">
//             //             <li className="nav-link">Login</li>
//             //             <li className="nav-link">Logout</li>
//             //         </ul>
//             //     </nav>
//             // </header>
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="https://www.w3schools.com/react/" className="navbar-brand">Link to</a></div>
//                     <ul className="navbar-nav">
//                         {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/shiva">Home</Link></li>}
//                         {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li>}
//                     </ul>
//                     <ul className="navbar-nav navbar-collapse justify-content-end">
//                         {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                         {isUserLoggedIn && <li><Link className="nav-link" to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
//                     </ul>
//                 </nav>
//             </header>
            
//             // <div>Header <hr/></div>

//         )
//     }
// }

// class FooterComponent extends Component {
//     render() {
//         return (
//             <footer className="footer">
//                 <span className="text-muted">All Rights Reserved 2020 @ShivaKumarMutukula</span>

//             </footer>
//         )
//     }
// }

// class LogoutComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1 style={{color : "green"}}> You have logged out successfully</h1>
//                 <div className="container">
//                     <h3>Thank you for using the Application.</h3>
//                 </div>
//             </>
//         )
//     }
// }

// class WelcomeComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Welcome!!</h1>
//                 <div className="container"><h3> Hi {this.props.match.params.name}.</h3></div>
//                 <div> You can manage your stuff by clicking <Link to="/todos"> here</Link></div>
//             </>
//         )
//     }
// }

// class ListTodosComponent extends Component {

//     constructor(props) {
//         super(props);
//         this. state = {
//             todos : 
//             [
//                 {id :1 , description : "Learn 11", Done :  false, LastDate : new Date()},
//                 {id :2 , description : "Learn 22", Done :  false, LastDate : new Date()},
//                 {id :3 , description : "Learn 33", Done :  false, LastDate : new Date()},
//             ]
//         }
//     }
//     render () {
//         return (
//             <div>
//                 <h1> List of things to do</h1>
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th> id </th>
//                                 <th> description </th>
//                                 <th> Done </th>
//                                 <th> LastDate </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.todos.map (
//                                     todo =>
//                                     <tr>
//                                         <td> {todo.id}</td>
//                                         <td> {todo.description}</td>
//                                         <td> {todo.Done.toString()}</td>
//                                         <td> {todo.LastDate.toString()}</td>
//                                     </tr>
//                                 )
//                             }
                            
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// function ErrorComponent() {
//     return <div>Page not found dude!!!!</div>
// }

// function ShowInvalidCreds(props) {
//     if(props.hasLoginFailed)
//         return <div style={{color : "red"}}>Unsuccesful Login</div>
    
//     return null;
// }

// function LoginSuccessful(props) {
//     if(props.showSuccessMessage)
//         return <div style={{color : "green"}}> Login successful</div>
    
//     return null;
// }

export default ToDoApp;