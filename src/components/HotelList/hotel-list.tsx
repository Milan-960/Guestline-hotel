import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { getHotels } from "../../api/index";

import HotelItems from "./Hotel-items/hotel-items";

const HotelList = () => {
  const thunkDispatch = useAppDispatch();
  const hotels = useAppSelector((store) => store.hotels);
  const loading = useAppSelector((store) => store.loading);
  const noHotels = !loading && hotels.length === 0;

  useEffect(() => {
    thunkDispatch(getHotels());
  }, [thunkDispatch]);

  return (
    <div>
      {/* Here we are checking if there are any hotels available and if not we
      are rendering the message "No hotels available. */}
      {noHotels ? (
        <div>No hotels available.</div>
      ) : (
        <div>
          {hotels.map((hotel, index) => (
            <HotelItems key={index} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
