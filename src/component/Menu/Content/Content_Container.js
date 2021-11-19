import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Content from "./Content";


const ContentContainer = (props) => <Content {...props}/>
const mapStateToProps = (state) => ({
    tasks: state.contentReducer.tasks,
})
const mapDispatchToProps = (dispatch) => ({
})
export default compose(connect(mapStateToProps, mapDispatchToProps))(ContentContainer);