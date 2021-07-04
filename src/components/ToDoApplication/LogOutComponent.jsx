import React, {Component} from 'react';

class LogOutComponent extends Component {
    render() {
        return (
            <>
                <h1 style={{color : "green"}}> You have logged out successfully</h1>
                <div className="container">
                    <h3>Thank you for using the Application.</h3>
                </div>
            </>
        )
    }
}

export default LogOutComponent