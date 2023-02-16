import Hotel from "../custom-types/Hotel";
import HotelDetails from "../custom-types/Hotel-Details";

export type FilterAction =
  | "CHANGED_RATING"
  | "CHANGED_ADULTS"
  | "CHANGED_CHILDREN";

export type Action =
  | { type: "STARTED_LOADING" }
  | { type: "HOTELS_LIST"; payload: Hotel[] }
  | { type: "HOTEL_DETAILS"; payload: HotelDetails }
  | { type: "CHANGED_RATING"; payload: number }
  | { type: "CHANGED_ADULTS"; payload: number }
  | { type: "CHANGED_CHILDREN"; payload: number };
