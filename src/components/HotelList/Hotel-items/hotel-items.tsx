import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import Hotel from "../../../custom-types/Hotel";
import StarFilter from "../../Star/StarFilter";

import RoomItem from "./RoomItem";

interface Props {
  hotel: Hotel;
}

const HotelItems: FC<Props> = ({ hotel }) => {
  const rooms = hotel.details?.rooms;

  return (
    <div className="items_container">
      <div className="img_wrapper">
        <div className="items_img">
          <Carousel dynamicHeight={true} showStatus={false} showThumbs={false}>
            {hotel.images?.map((image, index) => (
              <img key={index} src={image.url} alt={image.alt} />
            ))}
          </Carousel>
        </div>

        <div className="hotel_info">
          <div>{hotel.name}</div>
          <div>{hotel.address1}</div>
          <div>{hotel.address2}</div>
        </div>
        <div className="hotel_star">
          <StarFilter value={parseInt(hotel.starRating)} starsCount={5} />
        </div>
      </div>

      <div className="items_rooms">
        {rooms && rooms.map((room) => <RoomItem key={room.id} room={room} />)}
      </div>
    </div>
  );
};

export default HotelItems;
