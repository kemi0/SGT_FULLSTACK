import { combineReducers } from 'redux'
import reducerStudentTable from './reducer_student_table';


const rootReducer = combineReducers({
    student: reducerStudentTable
});

export default rootReducer;