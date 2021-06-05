import axios from 'axios';
import {GET_USERS, ERROR, GET_USERDETAIL, CLEAR} from './types';

//Get Users
export const getUsers = () => async dispatch => {
    try{
      dispatch({
        type: CLEAR
      });
      
        const res = await axios.get('https://reqres.in/api/users?delay=3');
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: ERROR,
            payload: { msg: err.message, status: err.message }
        });
    }
}

//Get User by Id
export const getUserDetail = (id) => async dispatch => {

    try{
        const res = await axios.get(`https://reqres.in/api/users/${id}?delay=3`);
        console.log(res.data);
        dispatch({
            type: GET_USERDETAIL,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: ERROR,
            payload: { msg: err.message, status: err.message }
        });
    }
}

