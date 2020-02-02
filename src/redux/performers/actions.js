//Action Types
// export const GET_PERFORMERS = 'auth/GET_PERFORMERS';
// export const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS';
// export const GET_USER_ERROR = 'auth/GET_USER_ERROR';

export const ADD_NEW_PERFORMER = 'auth/ADD_NEW_PERFORMER';
export const NEW_PERFORMER_SUCCESS = 'auth/NEW_PERFORMER_SUCCESS';
export const NEW_PERFORMER_ERROR = 'auth/NEW_PERFORMER_ERROR';


//Action creators
// export const getUser = (email, password) => ({
//     type: GET_USER,
//     email: email,
//     password: password
// });

// export const getUserSuccess = (data) => ({
//     type: GET_USER_SUCCESS,
//     payload: data
// });

// export const getUserError = (error) => ({
//     type: GET_USER_ERROR,
//     payload: error
// });


export const addNewPerformer = (name, age, category) => ({
    type: ADD_NEW_PERFORMER,
    name: name,
    age: age,
    category: category
});

export const newPerformerSuccess = (data) => ({
    type: NEW_PERFORMER_SUCCESS,
    payload: data
});

export const newPerformerError = (error) => ({
    type: NEW_PERFORMER_ERROR,
    payload: error
});


