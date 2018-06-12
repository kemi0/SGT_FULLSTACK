import types from '../actions/types';

const DEFAULT_STATE = {
    list : []
}

export default function(state=DEFAULT_STATE, action){
        switch(action.type){
            case types.GET_STUDENTS:
                return {list: action.payload.data.data}
            case types.ADD_STUDENT: 
                console.log('reducer action ', action);
                const newState = {...state};
                newState.list = [...newState.list, action.payload]
                console.log('new state: ', newState)
                return newState;
            default: 
                return state;
        }

}
