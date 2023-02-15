import { Image, Facility } from "./common";
import HotelDetails from "./Hotel-Details";

export default interface Hotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: Facility[];
  telephone: string;
  email: string;
  images?: Image[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position?: Position;
  details?: HotelDetails;
}

interface Position {
  latitude: string;
  longitude: string;
  timezone: string;
}
