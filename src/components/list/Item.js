import React from "react";

export default function Item({ itemClassName, value, ...props }) {
  return (
    <li className={itemClassName} {...props}>
      {value.name}
    </li>
  );
}
