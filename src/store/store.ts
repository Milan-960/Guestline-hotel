import { applyMiddleware, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { Action } from "./actions";
import reducer from "./reducer";
import Hotel from "../custom-types/Hotel";
import HotelDetails from "../custom-types/Hotel-Details";

export interface Filters {
  rating: number;
  adults: number;
  children: number;
}

export interface State {
  hotels: Hotel[];
  details: HotelDetails[];
  filters: Filters;
  loading: boolean;
}

export const initialState: State = {
  hotels: [],
  details: [],
  filters: {
    rating: 3,
    adults: 1,
    children: 0,
  },
  loading: false,
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<State, void, Action>;
