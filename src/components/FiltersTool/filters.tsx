import React from "react";
import { Filters } from "../../store/store";

interface Props {
  filters: Filters;
}

const FiltersTool: React.FC<Props> = ({ filters }) => {
  return (
    <div>{`stars:${filters.stars} adults:${filters.adults} children:${filters.children}`}</div>
  );
};

export default FiltersTool;
