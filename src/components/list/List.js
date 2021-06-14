import React from "react";
import Item from "./Item";

export default function List({ items, listClassName, deleteUserById, ...props }) {
  return (
    <ul className={listClassName} {...props}>
      {items.map((item) => (
        <Item
          onClick={deleteUserById.bind(null, item.id)}
          key={item.id}
          value={item}
        />
      ))}
    </ul>
  );
}
