import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addStudent, getStudents } from '../actions';
import { addModal } from 'react-redux';
import { connect } from 'react-redux';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: '',
            modalVisible: false,
            values: {},
        }
        this.addStudents = this.addStudents.bind(this);

    }

    addStudents(values){
        this.props.addStudent(this.props.backEndRoute, values.name, values.course, values.grade)
            .then(()=>{
                if(this.props.success){
                    this.props.getStudents(this.props.backEndRoute)
                    this.setState({
                        errorMessage: '',
                        modalVisible: true,
                        values: values
                    })

                }else{
                    this.setState({
                        errorMessage:this.props.errorMessage
                    })
                }
                this.props.reset();
            })


    }

    renderInput({ input, type, placeholder }) {
        return (
            <div className="input-group form-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user"></span>
                </span>
                <input {...input} type={type} className="form-control" name={name} placeholder={placeholder} />
            </div>
        )
    }


    render() {
        return (
            <form className="student-add-form col-md-3-md-push-9" onSubmit={this.props.handleSubmit(this.addStudents.bind(this))}>
                <h4>Add Student</h4>
                <Field name='name' placeholder='student Name' type='text' component={this.renderInput} />
                <Field name='course' placeholder='Student Course' type='text' component={this.renderInput} />
                <Field name='grade' placeholder='Student Grade' type='text' component={this.renderInput} />
                <button className="btn btn-success add">Add</button>
            </form>
        );
    }
}

AddForm = reduxForm({
    form: "add-form"
})(AddForm);



export default connect(null, { addStudent, getStudents })(AddForm);

