import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FilterAction } from "../../store/actions";
import Counter from "../Counter/counter";
import StarFilter from "../Star/StarFilter";

const FiltersTool = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);

  const handleChange = (actionType: FilterAction) => (value: number) => {
    dispatch({ type: actionType, payload: value });
  };
  return (
    <div className="filter_tool">
      <StarFilter
        starsCount={5}
        value={filters.rating}
        onChange={handleChange("CHANGED_RATING")}
      />
      <div className="adults_counter">
        <span>Adults</span>
        <Counter
          value={filters.adults}
          onChange={handleChange("CHANGED_ADULTS")}
          minValue={1}
        />
      </div>
      <div className="adults_counter">
        <span>Children</span>
        <Counter
          value={filters.children}
          onChange={handleChange("CHANGED_CHILDREN")}
          minValue={0}
        />
      </div>
    </div>
  );
};

export default FiltersTool;
