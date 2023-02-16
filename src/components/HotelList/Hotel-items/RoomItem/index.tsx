import { FC } from "react";
import { Room } from "../../../../custom-types/Hotel-Details";

interface Props {
  room: Room;
}

const RoomItem: FC<Props> = ({ room }) => {
  return (
    <div className="room_container">
      <div className="room_info">
        <div className="room_name">{room.name}</div>
        <div className="room_details">
          <div>{`Adults: ${room.occupancy.maxAdults}`}</div>
          <div>{`Children: ${room.occupancy.maxChildren}`}</div>
        </div>
      </div>
      <div>{room.longDescription}</div>
    </div>
  );
};

export default RoomItem;
