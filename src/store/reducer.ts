import { Action } from "./actions";
import { State } from "./store";

const reducer = (state: State, action: Action) => {
  const payload = action.payload;
  switch (action.type) {
    case "DOWNLOADED_HOTELS":
      return { ...state, hotels: payload.hotels };
    default:
      return state;
  }
};

export default reducer;
