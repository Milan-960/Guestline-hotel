import HotelList from "./components/HotelList/hotel-list";
import Navbar from "./components/Navbar/navbar";
import "./App.css";
import "./styles/global.scss";

function App() {
  return (
    <>
      <div>
        <div className="app">welcome to Guestline</div>
        <Navbar />
        <HotelList />
      </div>
      ;
    </>
  );
}

export default App;
