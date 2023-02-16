import FiltersTool from "../FiltersTool/filters";

const Navbar = () => {
  const bannerURL =
    "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/282214329.jpeg";
  return (
    <div className="container">
      <img src={bannerURL} alt="hotel" className="hotel_banner" />
      <div className="filter">
        Filters
        <FiltersTool />
      </div>
    </div>
  );
};

export default Navbar;
