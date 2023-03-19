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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadingShowMore, setLoadingShowMore] = useState<boolean>(false);
  const [errorShowMore, setErrorShowMore] = useState<boolean>(false);
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

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const [resp1, resp2] = await Promise.all([
        axios<FetchCartItem>(`?page=${page}`),
        axios<FetchCartItem>(`?page=${page + 1}`),
      ]);
      setLoading(false);
      setData([...resp1.data.items, ...resp2.data.items]);
    } catch (e) {
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setError(true);
    }
  };

  const showMore = useCallback(
    async (page = 3) => {
      try {
        setErrorShowMore(false);
        const resp = await axios<FetchCartItem>(`?page=${page}`);
        setData([...data, ...resp.data.items]);
      } catch (e) {
        setErrorShowMore(true);
      }
    },
    [data],
  );
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      data,
      addCart,
      showMore,
      loading,
      error,
      errorShowMore,
    }),
    [data, addCart, showMore, loading, error, errorShowMore],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
