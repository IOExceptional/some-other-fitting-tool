import {
    GET_SHIP_CATEGORIES_REQUEST,
    GET_SHIP_CATEGORIES_RESPONSE,
    GET_SHIPS_REQUEST,
    GET_SHIPS_RESPONSE
} from "./keys/ships";

const requestShipCategories = () => ({
    type: GET_SHIP_CATEGORIES_REQUEST
});

const responseShipCategories = (payload) => ({
    type: GET_SHIP_CATEGORIES_RESPONSE,
    payload
});

const requestShips = (payload) => ({
    type: GET_SHIPS_REQUEST,
    payload
});

const responseShips = (payload) => ({
    type: GET_SHIPS_RESPONSE,
    payload
});

export {
    requestShipCategories,
    responseShipCategories,
    requestShips,
    responseShips
};