import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {FitterView} from "./views/FitterView";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {appStore} from "./data/store/index";
import rootSaga from "./data/sagas/index";
import {Header} from "./components/header/Header";
import {AppContainer} from "./components/root/containers/AppContainer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appStore,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store}>
        <Router>
            <AppContainer>
                <Header />

                <Route exact path="/" component={HomeView}/>
                <Route path="/fitter" component={FitterView}/>
            </AppContainer>
        </Router>
    </Provider>
);

export {
    App
};