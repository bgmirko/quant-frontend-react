import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { addNewPerformer } from '../redux/performers/actions'; 
import NewPerformerComponent from '../components/NewPerformerComponent'


const PerformersContainer = props => {

    const handleNewPerformer = (e, {name, age, category}) => {
        e.preventDefault();
        props.onAddNewPerformer(name, age, category);
    }

    return(
        <div>
            <NewPerformerComponent 
                onPerformerDataSubmit={handleNewPerformer}
            />
        </div>
    )

}

const mapStateToProps = state => ({
  //  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    onAddNewPerformer: (name, age, category) => dispatch(addNewPerformer(name, age, category))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PerformersContainer);