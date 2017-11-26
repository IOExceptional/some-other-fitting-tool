import {combineReducers} from "redux";
import ships from "./ships";

const appStore = combineReducers({
    ships
});

export {
    appStore
};