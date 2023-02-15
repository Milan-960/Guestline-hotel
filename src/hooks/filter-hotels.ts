import Hotel from "../custom-types/Hotel";
import { Room } from "../custom-types/Hotel-Details";
import { Filters } from "../store/store";

export const FilterHotels = ({
  hotels,
  filters,
}: {
  hotels: Hotel[];
  filters: Filters;
}) => {
  const filteredRating = filterByRating(hotels, filters.rating);
  const hotelsWithFilteredRooms = filteredRating.map((hotel) => ({
    ...hotel,
    details: {
      ...hotel.details,
      rooms: filterRooms({
        rooms: hotel.details?.rooms,
        adults: filters.adults,
        children: filters.children,
      }),
    },
  }));
  const filteredHotels = hotelsWithFilteredRooms.filter(
    (hotel) => hotel.details.rooms.length > 0
  );

  return filteredHotels;
};

const filterByRating = (hotels: Hotel[], rating: number) =>
  hotels.filter((hotel) => parseInt(hotel.starRating) >= rating);

const filterRooms = ({
  rooms,
  adults,
  children,
}: {
  rooms?: Room[];
  adults: number;
  children: number;
}) =>
  rooms
    ? rooms.filter(
        (room) =>
          room.occupancy.maxAdults >= adults &&
          room.occupancy.maxChildren >= children
      )
    : [];
