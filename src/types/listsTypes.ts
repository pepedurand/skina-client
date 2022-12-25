export interface PizzaData {
  pizza_id: string;
  name: string;
  description: string;
  additional_price: number;
}

export interface DrinkData {
  drink_id: string;
  name: string;
  size: string;
  price: number;
}

export interface ComboData {
  combo_id: string;
  name: string;
  description: string;
  price: number;
}

export interface SizeData {
  size_id: string;
  size: string;
  description: string;
  price: number;
}
