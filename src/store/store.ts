import Hotel from "../custom-types/Hotel";

export interface Filters {
  stars: number;
  adults: number;
  children: number;
}

export interface State {
  hotels: Hotel[] | null;
  filters: Filters;
}

export const initialState: State = {
  hotels: null,
  filters: {
    stars: 0,
    adults: 0,
    children: 0,
  },
};
