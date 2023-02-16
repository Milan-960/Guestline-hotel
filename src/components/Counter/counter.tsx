import React from "react";

interface Props {
  name?: string;
  minValue?: number;
  maxValue?: number;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<Props> = ({
  name,
  value,
  onChange,
  minValue,
  maxValue,
}) => {
  const decrementCondition = minValue === undefined || minValue <= value - 1;
  const incrementCondition = maxValue === undefined || maxValue >= value + 1;

  const increment = () => incrementCondition && onChange(value + 1);
  const decrement = () => decrementCondition && onChange(value - 1);

  return (
    <div>
      <span>{name}</span>
      <div>
        <div>
          <button onClick={increment}> + </button>
        </div>
        <div>{value}</div>
        <div>
          <button onClick={decrement}> - </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
