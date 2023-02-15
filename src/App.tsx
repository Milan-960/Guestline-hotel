import React, { useEffect, useReducer } from "react";

import reducer from "./store/reducer";
import { initialState } from "./store/store";
import { getHotels } from "./api/index";
import HotelList from "./components/HotelList/hotel-list";
import Navbar from "./components/Navbar/navbar";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getHotels((hotels) =>
      dispatch({ type: "DOWNLOADED_HOTELS", payload: { hotels } })
    );
  }, []);

  return (
    <>
      <div className="App">
        welcome to Guestline <Navbar filters={state.filters} />
        {state.hotels ? (
          <HotelList hotels={state.hotels} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      ;
    </>
  );
}

export default App;
