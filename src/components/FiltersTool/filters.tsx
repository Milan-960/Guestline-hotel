import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { FilterAction } from "../../store/actions";
import Counter from "../Counter/counter";

const FiltersTool = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);

  const handleChange = (actionType: FilterAction) => (value: number) => {
    dispatch({ type: actionType, payload: value });
  };
  return (
    <div>
      {/* <div>{`stars:${filters.stars}`}</div> */}
      <div>
        <span>adults</span>
        <Counter
          value={filters.adults}
          onChange={handleChange("CHANGED_ADULTS")}
          minValue={1}
        />
      </div>
      <div>
        <span>children</span>
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
