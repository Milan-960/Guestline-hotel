import { FC } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export const Star: FC<{ filled: boolean; onClick?: () => void }> = ({
  filled,
  onClick,
}) => {
  const Component = filled ? StarFilled : StarOutlined;

  return (
    <Component
      onClick={onClick}
      style={{ fontSize: "1.4em", color: "green" }}
    />
  );
};
