import Hotel from "../custom-types/Hotel";

export type Action = {
  type: "DOWNLOADED_HOTELS";
  payload: { hotels: Hotel[] };
};
