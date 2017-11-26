import React, { Component } from "react";
import {connect} from "react-redux";
import {FitterContainer} from "../containers/FitterContainer";

class _FitterConnector extends Component {
    render() {
        return (
            <FitterContainer>
                test
            </FitterContainer>
        );
    }
}

const mapStateToProps = state => ({

});

const FitterConnector = connect(mapStateToProps)(_FitterConnector);

export {
    _FitterConnector,
    FitterConnector
}