import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js';


class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            // <header>
            //     <nav className="navbar navbar-expand-md" >
            //         <div> <a className="navbar-brand"> Shiva</a></div>
            //         <ul className="navbar-nav">
            //             <li className="nav-link">Home</li>
            //             <li className="nav-link">Todos</li>
            //         </ul>
            //         <ul className="navbar-nav navbar-collapse justify-content-end">
            //             <li className="nav-link">Login</li>
            //             <li className="nav-link">Logout</li>
            //         </ul>
            //     </nav>
            // </header>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.w3schools.com/react/" className="navbar-brand">Link to</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/shiva">Home</Link></li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            
            // <div>Header <hr/></div>

        )
    }

}

export default withRouter(HeaderComponent);