import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import makananReducers from "./reducers/reducer.makanan";
import modalReducer from "./reducers/reducer.modal";
import PorsiReducer from "./reducers/reducerPorsiMakanan";
import makananallReducers from "./reducers/reducers.makanan.all";

const reducers = combineReducers({
	makananReducers: makananReducers,
	modalReducer: modalReducer,
	PorsiReducer: PorsiReducer,
	makananallReducers: makananallReducers,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
