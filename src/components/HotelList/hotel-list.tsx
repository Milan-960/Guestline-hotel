import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { getHotels } from "../../api/index";
import { FilterHotels } from "../../hooks/filter-hotels";
import HotelItems from "./Hotel-items/hotel-items";

const HotelList = () => {
  const dispatch = useAppDispatch();
  const hotels = useAppSelector((store) => store.hotels);
  const loading = useAppSelector((store) => store.loading);
  const filters = useAppSelector((store) => store.filters);

  // filtering the hotels based on the filters
  const filteredHotels = FilterHotels({
    hotels,
    filters,
  });
  const noHotels = !loading && filteredHotels.length === 0;

  // fetching the hotels from the api
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <div className="list_container">
      {/* Here we are checking if there are any hotels available and if not we
      are rendering the message "No hotels available. */}
      <div className="list_hotels">
        {loading ? (
          <div>Loading!!</div>
        ) : (
          <div>
            {noHotels && <div>No hotels available.</div>}
            {filteredHotels.map((hotel, index) => (
              <HotelItems key={index} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelList;
