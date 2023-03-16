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
