import { createStore, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga';
import testReducer from "./testReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
const rootReducer = combineReducers({ testReducer })
const configStore = () => {
    return createStore(rootReducer, applyMiddleware(sagaMiddleware))
}

export default configStore