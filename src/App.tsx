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

  return (
    <div className="App">
      {/* shopping list form */}
      <ShoppingListForm onAddItem={addItem} />
      {/* shopping list list */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
