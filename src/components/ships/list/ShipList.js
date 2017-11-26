import React from "react";
import PropTypes from "prop-types";
import {ShipListCategory} from "../category/ShipListCategory";
import {ShipListContainer} from "../containers/ShipListContainer";

const ShipList = ({ isLoading, shipGroups }) => (
    <ShipListContainer>
        {!isLoading &&
            shipGroups.map(shipGroup => (
                <ShipListCategory key={shipGroup.id} id={shipGroup.id} name={shipGroup.name} types={shipGroup.shipTypes}/>
            ))
        }
    </ShipListContainer>
);

ShipList.propTypes = {
    shipGroups: PropTypes.array.isRequired
};

export {
    ShipList
};