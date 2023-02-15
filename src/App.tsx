import HotelList from "./components/HotelList/hotel-list";
import Navbar from "./components/Navbar/navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        welcome to Guestline
        <Navbar />
        <HotelList />
      </div>
      ;
    </>
  );
}

export default App;
