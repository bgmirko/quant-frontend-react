import React, { useEffect } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { addNewPerformer, getPerformers, deletePerformer } from '../redux/performers/actions'; 
import NewPerformer from '../components/NewPerformer'
import ListOfPerformers from '../components/ListOfPerformers';


const PerformersContainer = props => {

    useEffect(() => { 
        console.log("[PerformersContainer] component did mount");
        props.onGetPerformers();
    }, [])

    const handleNewPerformer = (e, {name, age, category}) => {
        e.preventDefault();
        props.onAddNewPerformer(name, age, category);
    }


    console.log(props.performers)

    return(
        <div>
            <ListOfPerformers 
                performers={props.performers}
                deletePerformer={props.onDeletePerformer}
            />
            <NewPerformer 
                onPerformerDataSubmit={handleNewPerformer}
            />
        </div>
    )

}

const mapStateToProps = state => ({
    performers: state.performers.performers,
});

const mapDispatchToProps = dispatch => ({
    onAddNewPerformer: (name, age, category) => dispatch(addNewPerformer(name, age, category)),
    onGetPerformers: () => dispatch(getPerformers()),
    onDeletePerformer: (_id) => dispatch(deletePerformer(_id))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PerformersContainer);