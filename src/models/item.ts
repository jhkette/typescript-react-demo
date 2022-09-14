// interfaces for Item
export interface Item {
  id: string;
  product: string;
  quantity: string;
}
// interfaces for ShoppingListFormProps
export interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: string) => void;
}

// interfaces for GreeterProps
export interface GreeterProps {
  person: string;
}
