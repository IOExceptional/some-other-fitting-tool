import {all} from "redux-saga/effects";
import {setupEve} from "./eve";

function* rootSaga() {
    yield all([
        setupEve()
    ]);
}

export default rootSaga;