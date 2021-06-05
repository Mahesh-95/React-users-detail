import {GET_USERS, ERROR, GET_USERDETAIL, CLEAR} from '../actions/types';

const initialState = {
    user: null,
    users : [],
    userDetail : [],
    loading: true,
    error: {}
}

export default function (state = initialState, action){
    const {type, payload} = action;
    state.loading= true;
    switch(type){
        case GET_USERS:
            return{
                ...state,
                users: payload.data,
                loading: false
            }
        case GET_USERDETAIL:
            return{
                ...state,
                user: payload,
                loading: false
            }
        case CLEAR:
            return{
                ...state,
                user: null,
                users: [],
                loading: true
            }
        case ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
} 