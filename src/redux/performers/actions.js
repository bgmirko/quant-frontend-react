//Action Types
export const GET_PERFORMERS = 'auth/GET_PERFORMERS';
export const GET_PERFORMERS_SUCCESS = 'auth/GET_PERFORMERS_SUCCESS';
export const GET_PERFORMERS_ERROR = 'auth/GET_PERFORMERS_ERROR';

export const ADD_NEW_PERFORMER = 'auth/ADD_NEW_PERFORMER';
export const NEW_PERFORMER_SUCCESS = 'auth/NEW_PERFORMER_SUCCESS';
export const NEW_PERFORMER_ERROR = 'auth/NEW_PERFORMER_ERROR';

export const DELETE_PERFORMER = 'auth/DELETE_PERFORMER';



//Action creators
export const getPerformers = () => ({
    type: GET_PERFORMERS
});

export const getPerformersSuccess = (data) => ({
    type: GET_PERFORMERS_SUCCESS,
    payload: data
});

export const getPerformersError = (error) => ({
    type: GET_PERFORMERS_ERROR,
    payload: error
});


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

export const deletePerformer = (_id) => ({
    type: DELETE_PERFORMER,
    _id: _id
});


