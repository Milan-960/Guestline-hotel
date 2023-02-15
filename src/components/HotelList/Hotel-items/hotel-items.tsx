import { FC } from "react";
import Hotel from "../../../custom-types/Hotel";

interface Props {
  hotel: Hotel;
}

const HotelItems: FC<Props> = ({ hotel }) => {
  // Here we are rending the data one by one from the hotel custom-types
  return (
    <div>
      {hotel.id}
      {hotel.name}
      {hotel.description}
      {hotel.starRating}
    </div>
  );
};

export default HotelItems;
