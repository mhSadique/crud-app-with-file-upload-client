import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer";
import ThunkMiddleware from 'redux-thunk';
const composedEnhancer = applyMiddleware(ThunkMiddleware)

export const store = createStore(rootReducer, composedEnhancer);