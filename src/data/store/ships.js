import {combineReducers} from "redux";
import {
    GET_SHIP_CATEGORIES_RESPONSE,
    GET_SHIPS_RESPONSE
} from "../actions/keys/ships";

const defaultShips = [];

const all = (state = defaultShips, action) => {
    switch (action.type) {
        case GET_SHIPS_RESPONSE:
            var newShips = action.payload.filter(ship => !state.includes(ship.type_id));
            return [
                ...state.concat(newShips)
            ];
        default:
            return state;
    }
};

const defaultShipGroups = [];

const allGroups = (state = defaultShipGroups, action) => {
    switch (action.type) {
        case GET_SHIP_CATEGORIES_RESPONSE:
            return [
                ...state,
                ...state.concat(action.payload)
            ];
        default:
            return state;
    }
};

const isLoadingCategories = (state = true, action) => {
    switch(action.type) {
        case GET_SHIP_CATEGORIES_RESPONSE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    all,
    allGroups,
    isLoadingCategories
});