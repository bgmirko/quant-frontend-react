import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { getUser } from '../redux/auth/actions'; 
import LoginComponent from '../components/LoginComponent';


const LoginContainer = props => {

    const handleLogin = (e, email, password) => {
        e.preventDefault();
        props.onGetUser(email, password);
    }

    return(
        <div>
            <LoginComponent 
                onLoginDataSubmit={handleLogin}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    //selectedExamResults: state.exam.selectedExamResults,
});

const mapDispatchToProps = dispatch => ({
    onGetUser: (email, password) => dispatch(getUser(email, password)),
});

export default compose(
    //withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);