import React from "react";
import {connect} from "react-redux";
import * as ShipSelectors from "../../../data/selectors/ShipSelectors";
import {ShipList} from "../list/ShipList";

const _ShipListConnector = ({ isLoading, shipGroups }) => (
    <ShipList isLoading={isLoading} shipGroups={shipGroups}/>
);

const mapStateToProps = state => ({
    isLoading: ShipSelectors.isLoadingCategories(state),
    shipGroups: ShipSelectors.allGroups(state)
});

const ShipListConnector = connect(mapStateToProps)(_ShipListConnector);

export {
    _ShipListConnector,
    ShipListConnector
}