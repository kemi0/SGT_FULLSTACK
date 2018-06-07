import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerStudentTable from './reducer_student_table';


 export default combineReducers({
    students: reducerStudentTable,
    form: formReducer
});

