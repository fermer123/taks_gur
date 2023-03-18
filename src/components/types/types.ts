export type CartItem = {
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
  about: string;
  createdAt: string;
};

export type CartContextType = {
  data: CartItem[];
};

export interface FetchCartItem {
  items: CartItem[];
  page: number;
  pages: number;
  size: number;
  total: number;
}
