import React, {Component} from 'react';
import moment from 'moment';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import TodoDataService from '../../api/todos/TodoDataService';
import AuthenticationService from './AuthenticationService.js';

class TodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date().setHours(10)).format('YYYY-MM-DD'),
            done : false,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        let username = AuthenticationService.getUserName();
        if(this.state.id ===-1)
        {
            return;
        }
        else {
            TodoDataService.retrieveATodo(username, this.state.id)
                .then( response => this.setState( {
                description : response.data.description,
                targetDate : moment(response.data.targetDate).format('YYYY-MM-DD'),
                done : response.data.done
        }))

        } 
    }

    render() {

        let {description,targetDate, done} = this.state;

        return(

            <div>
                <h1>Todo Form</h1>
                <div className="Container">
                    <Formik 
                        initialValues = {{description, targetDate, done}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                        >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" ></Field>
                                    </fieldset>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" ></Field>
                                    </fieldset>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Done</label>
                                        <Field className="form-control" as="select" name="done">
                                        <option value={false}>False</option>
                                        <option value={true}>True</option>
                                        </Field>
                                    </fieldset>
                                    <button className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            </div>
            // <div>TODOCOMPONENT of id {this.props.match.params.id}</div>
        )          
    }

    onSubmit(values) {
        let username = AuthenticationService.getUserName();
        let aTodo = {
            id : this.state.id,
            description : values.description,
            targetDate : values.targetDate,
            done :values.done,
        }
        if(this.state.id === -1){
            TodoDataService.createATodo(username, aTodo)
            .then(() => this.props.history.push('/todos'));
        }
        else {
            TodoDataService.updateATodo(username, this.state.id, aTodo)
            .then(() => this.props.history.push('/todos'));
        }
       
    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = "Description cannot be null."
        }
        else if(values.description.length < 5) {
            errors.description = "Description cannot be less than 5 charecters."
        }
        else if(values.description.length > 50) {
            errors.description = "Description cannot be more than 25 charecters."
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Please enter a valid date."
        }

       return errors;
    }
}

export default TodosComponent;