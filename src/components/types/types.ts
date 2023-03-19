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
  addCart: (e: CartItem) => void;
  showMore: (page: number) => void;
  loading: boolean;
  error: boolean;
};

export interface FetchCartItem {
  items: CartItem[];
  page: number;
  pages: number;
  size: number;
  total: number;
}
