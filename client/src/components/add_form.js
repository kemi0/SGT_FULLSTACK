import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addStudent, getStudents } from '../actions';
import { connect } from 'react-redux';

class AddForm extends Component {
    constructor(props) {
        super(props);


    }

    addStudents(values) {
        console.log('hello', values);
        this.props.addStudent(values.name, values.course, values.grade)

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

// function mapStateToProps(state, props ) {
//     return {
//         ...props,
//         form: state.form,
//         student: state.students
//     }
// }
// function mapDispatchToProps( dispatch, props) {
//     return {
//         handleSubmit: function(name, course, grade) {
//             dispatch(addStudent(name, course, grade))
//         },
//         getStudents: () => dispatch(getStudents())
//     }
// }

export default connect(null, { addStudent, getStudents })(AddForm);

