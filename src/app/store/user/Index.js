import { createStore } from 'redux';

const initialState = {
    loading: false,
    action: null,
    label: ''
}

function reducer(state = initialState, action) {
    return { 
        ...state,
        action : action.action,
        label: action.label
    } 
}

const store = createStore(reducer);

export default store;