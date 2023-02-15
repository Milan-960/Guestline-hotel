import { FC } from "react";

interface Props {
  minValue?: number;
  maxValue?: number;
  value: number;
  onChange: (value: number) => void;
}

const Counter: FC<Props> = ({ value, onChange, minValue, maxValue }) => {
  const decrementCondition = minValue === undefined || minValue <= value - 1;
  const incrementCondition = maxValue === undefined || maxValue >= value + 1;

  const increment = () => incrementCondition && onChange(value + 1);
  const decrement = () => decrementCondition && onChange(value - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
