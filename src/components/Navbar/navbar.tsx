import React from "react";
import { Filters } from "../../store/store";
import FiltersTool from "../FiltersTool/filters";

interface Props {
  filters: Filters;
}

const Navbar: React.FC<Props> = ({ filters }) => {
  return (
    <div>
      <div>Filters</div>
      <FiltersTool filters={filters} />
    </div>
  );
};

export default Navbar;
