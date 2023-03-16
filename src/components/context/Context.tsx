import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from '../axios';

import {CartContextType, CartItem} from '../types/types';

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<CartItem[]>(null);

  const dataItem = useCallback((cart: CartItem[]) => {
    setData(cart);
  }, []);
  const fetchData = async (count = 10) => {
    const resp = await axios<CartItem[]>(`?page=${count}`);
    dataItem(resp.data);
  };
  useEffect(() => {
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
