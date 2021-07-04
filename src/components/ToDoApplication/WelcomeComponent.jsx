import React, { Component } from "react"
import {Link } from 'react-router-dom';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!!</h1>
                <div className="container"><h3> Hi {this.props.match.params.name}.</h3></div>
                <div> You can manage your stuff by clicking <Link to="/todos"> here</Link></div>
            </>
        )
    }
}

export default WelcomeComponent;