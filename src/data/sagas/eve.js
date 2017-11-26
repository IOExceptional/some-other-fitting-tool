import {GET_SHIP_CATEGORIES_REQUEST, GET_SHIPS_REQUEST} from "../actions/keys/ships";
import {takeEvery, all, put} from "redux-saga/effects";
import eveSwagger from "eve-swagger";
import {responseShipCategories, responseShips} from "../actions/ships";

const esiClient = eveSwagger({
    service: "https://esi.tech.ccp.is",
    source: "tranquility",
    agent: "eve-swagger | https://github.com/lhkbob/eve-swagger-js",
    language: 'en-us',
    timeout: 6000,
    minTime: 0,
    maxConcurrent: 0
});

function* getShipCategories() {
    const shipTypes = yield esiClient.types.categories(6).info();

    const shipGroups = [
        yield esiClient.types.groups(shipTypes.groups[0]).info(),
        yield esiClient.types.groups(shipTypes.groups[1]).info()
    ];

    // const shipGroups = yield all(shipTypes.groups.map(group => esiClient.types.groups(group).info()));

    const shipGroupMap = shipGroups.map(grp => ({
        id: grp.group_id,
        name: grp.name,
        shipTypes: grp.types
    }));

    // yield all([shipGroups.map(shipGrp => put(requestShips(shipGrp.types)))]);

    yield put(responseShipCategories(shipGroupMap));
}

function* getShips(action) {
    const types = action.payload;

    const ships = yield all(types.map(type => esiClient.types(type).info()));

    yield put(responseShips(ships));
}

function* setupEve() {
    all([
        yield takeEvery(GET_SHIP_CATEGORIES_REQUEST, getShipCategories),
        yield takeEvery(GET_SHIPS_REQUEST, getShips)
    ]);
}

export {
    getShipCategories,
    setupEve
};