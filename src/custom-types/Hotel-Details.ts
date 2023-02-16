interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

export interface Room {
  id: string;
  name: string;
  longDescription: string;
  occupancy: Occupancy;
}

export default interface HotelDetails {
  rooms: Room[];
}
