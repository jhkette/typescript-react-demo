import React from "react";
import {Item} from '../models/item'


interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>ShoppingList</h1>
      {/* map through items */}
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
