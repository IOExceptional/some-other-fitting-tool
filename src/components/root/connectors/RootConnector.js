import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {requestShipCategories} from "../../../data/actions/ships";
import {RootContainer} from "../containers/RootContainer";
import {FitterConnector} from "../../fitter/connectors/FitterConnector";
import {ShipListConnector} from "../../ships/connectors/ShipListConnector";


class _RootConnector extends Component {
    static propTypes = {
        requestShips: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.requestShips();
    }

    render() {
        return (
            <RootContainer>
                <ShipListConnector />
                <FitterConnector/>
            </RootContainer>
        )
    }
}

const mapDispatchToProps = {
    requestShips: requestShipCategories
};

const RootConnector = connect(null, mapDispatchToProps)(_RootConnector);

export {
    _RootConnector,
    RootConnector
};