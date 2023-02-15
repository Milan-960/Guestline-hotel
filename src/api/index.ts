import Hotel from "../custom-types/Hotel";

// Make a axios fetch req and create a function
// that takes in a callback function
// and returns a promise
// that resolves with the data from the server
// and rejects with an alert if there is an error
// fetching the data from the server.

export const getHotels = async (callback: (data: Hotel[]) => void) => {
  try {
    const res = await fetch(
      "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
    );
    const data = await res.json();
    console.log("res data", data);
    return callback(data);
  } catch (err) {
    return alert("Server error.");
  }
};
