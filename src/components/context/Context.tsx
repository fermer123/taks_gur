import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from '../axios';

import {CartContextType, CartItem, FetchCartItem} from '../types/types';

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<CartItem[]>(null);

  const dataItem = useCallback((cart: CartItem[]) => {
    setData(cart);
  }, []);
  const fetchData = async (page = 20) => {
    const resp = await axios<FetchCartItem>(`?pages=${page}`);
    dataItem(resp.data.items);
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataItem]);

  const value = useMemo(
    () => ({
      data,
    }),
    [data],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
