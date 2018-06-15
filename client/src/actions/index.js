import types from './types';
import axios from 'axios';

const BASE_URL = 'server/database_connect.php?action=get&resource=students';
const DEL_URL = `server/database_connect.php?action=get&resource=delete_student`
const ADD_URL = 'server/database_connect.php?action=post&resource=add_student';
const EDT_URL = `server/database_connect.php?action=post&resource=edit_student`;

export function getStudents() {
    console.log('getStudents called')
        const request = axios.get(BASE_URL)
        return {
            type: types.GET_STUDENTS,
            payload: request
        }
}

// const DELETE_URL = 

export function addStudent(name, course, grade){
    // console.log('action index.js:');
    return {
        type: types.ADD_STUDENT,
        payload: axios.post(ADD_URL, {
            name: name,
            course: course,
            grade: grade
        })
        .then(response => {
            return response;
            // if(response.data.success) return {
            //     name: name,
            //     course: course,
            //     grade: grade
            // }
        })
    }

//     return axios.post(ADD_URL, {
//         name: name,
//         course: course,
//         grade: grade
//     })
//     .then(response => {
//         if(response.data.success) return {
//             type: types.ADD_STUDENT,
//             payload: {
//                 name: name,
//                 course: course,
//                 grade: grade
//             }
//         }
//     })
}
export function deleteStudent( id ){
    const request = axios.post(DEL_URL, {
      id: id,

    })
    return {
        type: types.DELETE_STUDENT,
        payload: request
    }
}

export function editStudent(name, course,grade,id){
    const request = axios.post(EDT_URL, {
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