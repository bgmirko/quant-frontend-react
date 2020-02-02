import * as ActionTypes from './actions';

const initialState = {
    user: {
        _id: null,
        userName: "",
        name: "",
        email: ""
    },
    dataLoading: false,
    errorMessage: null
 }

const authReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case ActionTypes.GET_USER:
            return {
                ...state,
                dataLoading: true
            };  
        case ActionTypes.GET_USER_SUCCESS:
            const user = action.payload.data.getUser;
            return {
                ...state,
                user: {
                    _id: user._id,
                    userName: user.userName,
                    name: user.name,
                    email: user.email
                },
                dataLoading: false
            };   
        case ActionTypes.GET_USER_ERROR:
            return {
                ...state,
                user: {
                    _id: null,
                    userName: "",
                    name: "",
                    email: ""
                },
                dataLoading: false,
                errorMessage: action.payload.message
            };    
        default:
            return { ...state };
    }

}

export default authReducer;