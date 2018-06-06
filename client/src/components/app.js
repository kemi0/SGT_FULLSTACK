import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './header';
import StudenListTable from './student_list_table';
import AddForm from './add_form';



const App = () => (
    <div>
        <div className="container">
            <Header/>
            <AddForm/>
            <StudenListTable/>
        </div>
    </div>
);

export default App;
