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
  const [data, setData] = useState<CartItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCart = useCallback(
    (item: CartItem) => {
      const sameItem = cart.findIndex((e) => e.id === item.id);

      if (sameItem >= 0) {
        setCart(
          cart.map((e) => {
            if (e.id === item.id) {
              return {
                ...e,
                item,
              };
            }
            return e;
          }),
        );
      } else {
        setCart([...cart, item]);
      }
    },
    [cart],
  );

  const dataItem = useCallback((card: CartItem[]) => {
    setData(card);
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
      addCart,
    }),
    [data, addCart],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
