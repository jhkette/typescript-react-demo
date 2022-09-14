// interfaces for app

export interface Item {
  id: string;
  product: string;
  quantity: string;
}

export interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: string) => void;
}

export interface GreeterProps {
  person: string;
}
