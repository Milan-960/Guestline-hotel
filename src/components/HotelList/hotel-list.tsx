import React from "react";
import Hotel from "../../custom-types/Hotel";
import HotelItems from "./Hotel-items/hotel-items";

interface Props {
  hotels: Hotel[];
}

const HotelList: React.FC<Props> = ({ hotels }) => {
  const noHotels = hotels.length === 0;
  return (
    <div>
      {/* Here we are checking if there are any hotels available and if not we
      are rendering the message "No hotels available. */}
      {noHotels ? (
        <div>No hotels available.</div>
      ) : (
        <div>
          {hotels.map((hotel) => (
            <HotelItems key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
