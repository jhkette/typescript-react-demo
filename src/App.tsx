import React, { useState } from "react";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import { Item } from "./models/item";
import "./App.css";
import { v4 as getId } from "uuid";
import ShoppingListForm from "./components/ShoppingListForm";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: string) => {
    setItems([...items, { id: getId(), product, quantity }]);
  };
  //   const items = [
  //     {id:1, product: "lemon", quantity: 3},
  //     {id:1, product: "appe", quantity: 3}
  // ]
  return (
    <div className="App">
      <ShoppingListForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
