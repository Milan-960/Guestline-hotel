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
    <div className="counter_container">
      <span>{name}</span>
      <div className="counter_buttons">
        <button onClick={increment}> + </button>

        <div>{value}</div>

        <button onClick={decrement}> - </button>
      </div>
    </div>
  );
};

export default Counter;
