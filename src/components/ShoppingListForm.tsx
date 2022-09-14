import React, { useRef } from "react";
import { ShoppingListFormProps } from "../models/item";


export default function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  
  function handleSubmit(e: React.FormEvent) {
    // prevent default
    e.preventDefault();
    // get values for product and quantity
    const newProduct = inputRef.current!.value;
    const quantity = quantityRef.current!.value;
    // additem 
    onAddItem(newProduct, quantity)
    // inputRef value empty string
    inputRef.current!.value = "";
    // quantityref value returns to 1
    quantityRef.current!.value = "1";
  }
  return (
    <form onSubmit={handleSubmit}>
        {/* form input */}
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <input type= "number"  ref={quantityRef}/>
      <button type="submit">Add item</button>
    </form>
  );
}
