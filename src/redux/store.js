
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import makananReducers from "./reducers/reducer.makanan";
import modalReducer from "./reducers/reducer.modal";
import trackingReducer from "./reducers/reducer.tracking";
import allmakananReducer from "./reducers/reducer.allmakanan";
import rekomendasiReducer from "./reducers/reducer.rekomendasi";
import keranjangReducer from "./reducers/reducer.keranjang";
import PorsiReducer from "./reducers/reducerPorsiMakanan";
import UserReducer from "./reducers/reducer.User";
import ToHistory from "./reducers/reducer.tohistory";
import akunReducers from './reducers/reducer.akun';
import ResepReducer from "./reducers/reducer.resep";
import ResepIDReducer from "./reducers/reducer.resepid";

const reducers = combineReducers({
	makananReducers: makananReducers,
	modalReducer: modalReducer,
	allmakananReducer: allmakananReducer,
	rekomendasiReducer: rekomendasiReducer,
	keranjangReducer: keranjangReducer,
	trackingReducer: trackingReducer,
	PorsiReducer: PorsiReducer,
	UserReducer: UserReducer,
	ToHistory: ToHistory,
  akunReducers: akunReducers,
	ResepReducer: ResepReducer,
	ResepIDReducer: ResepIDReducer
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
