import React, { useState } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { getUser, logout, addNewUser } from '../redux/auth/actions'; 
import LoginComponent from '../components/auth/LoginComponent';
import AuthComponent from '../components/auth/AuthComponent';
import LogoutComponent from '../components/auth/LogoutComponent';
import SignupComponent from '../components/auth/SignupComponent';


const AuthContainer = props => {

    const [state, setState] = useState({
        typeOfAuth: null
    })

    const handleLogin = (e, email, password) => {
        e.preventDefault();
        props.onGetUser(email, password);
    }

    const handleNewUser = (e, {email, password, name, userName}) => {
        e.preventDefault();
        props.onAddNewUser(email, password, name, userName)
    }

    const typeOfAuth = (type) => {
        setState({
            ...state,
            typeOfAuth: type
        });
    }

    const handleLogout = () => {
        setState({
            ...state,
            typeOfAuth: null
        });
        props.onLogout();
    }

    console.log(props.user);

    const getAuthOption = () => {
        if(props.user.name === "" && state.typeOfAuth === "signUp"){
            console.log("usao")
            return (
                <SignupComponent
                     onSignupDataSubmit={handleNewUser}
                />
            )
        }
        if(props.user.name !== ""){
            return (
                <LogoutComponent
                    logout={handleLogout}
                />
            )
        }
        if(state.typeOfAuth){
            return (
                <LoginComponent 
                    onLoginDataSubmit={handleLogin}
                />
            )
        }else{
            return (
                <AuthComponent 
                    typeOfAuth={typeOfAuth}
                />
            )
        }
    }

    const showAuthOption = getAuthOption();

    return(
        <div>
            {showAuthOption}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    onGetUser: (email, password) => dispatch(getUser(email, password)),
    onLogout: () => dispatch(logout()),
    onAddNewUser: (email, password, name, userName) => dispatch(addNewUser(email, password, name, userName))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AuthContainer);