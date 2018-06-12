import types from './types';
import axios from 'axios';

const BASE_URL = 'server/database_connect.php?action=get&resource=students';



export function getStudents() {
    console.log('getStudents called')
        const request = axios.get(BASE_URL)
        return {
            type: types.GET_STUDENTS,
            payload: request
        }
}

const ADD_URL = 'server/database_connect.php?action=post&resource=add_student';


export function addStudent(name, course, grade){
    const request = axios.post(ADD_URL, {
        name: name,
        course: course,
        grade: grade
    })
    .then(response => {
        if(response.data.success) return {
            name: name,
            course: course,
            grade: grade
        }
    })
    console.log('action index.js:');
    return {
        type: types.ADD_STUDENT,
        payload: request
    }
}
export function deleteStudent(name, course, grade ){
    const request = axios.post(ADD_URL)
    return {
        type: types.DELETE_STUDENT,
        payload: request
    }
}

export function editStudent(name, course,grade,id){
    const request = axios.post(ADD_URL, {
        name: name,
        course: course,
        grade: grade,
        id: id
    })
    return{
        type: types.EDIT_STUDENT,
        payload: request
    }
}