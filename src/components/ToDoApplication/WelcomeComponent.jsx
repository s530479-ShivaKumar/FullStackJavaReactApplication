import React, { Component } from "react"
import {Link } from 'react-router-dom';
import HelloWorldService from "../../api/todos/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);

        this.retrieveCustomeMessage = this.retrieveCustomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleErrorMessage  = this.handleErrorMessage.bind(this);
        this.state = {
            welcomeMessage : ""
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome!!</h2>
                <div className="container"><h3> Hey {this.props.match.params.name}.</h3></div>
                <div> You can manage your Todo things by clicking <Link to="/todos"> here</Link></div>
                {/* <div className="container">
                    <button className="btn btn-success" onClick={this.retrieveCustomeMessage}>A button</button>
                </div>
                <div> {this.state.welcomeMessage}</div> */}
            </div>
        )
    }

    retrieveCustomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response));

        // HelloWorldService.executeHelloWorldServiceBeab()
        // .then(response => this.handleSuccessfulResponse(response));

        HelloWorldService.executeHelloWorldServicePathvariable(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleErrorMessage(error));
        // console.log("button clicked")
    }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage : response.data.message})
    }

    handleErrorMessage(error) {
        let errorMessage ='';

        if(error.message)
            errorMessage+= error.message

        if(error.response && error.response.data)
            errorMessage+= error.response.data.message
        this.setState({welcomeMessage : errorMessage})
    }
}

export default WelcomeComponent;