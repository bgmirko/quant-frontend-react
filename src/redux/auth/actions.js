//Action Types
export const GET_USER = 'auth/GET_USER';
export const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS';
export const GET_USER_ERROR = 'auth/GET_USER_ERROR';


//Action creators
export const getUser = (email, password) => ({
    type: GET_USER,
    email: email,
    password: password
});

export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data
});

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload: error
});