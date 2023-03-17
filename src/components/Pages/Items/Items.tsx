import {CartContext} from '@src/components/context/Context';
import {FC, useContext} from 'react';

const Items: FC = () => {
  const {data} = useContext(CartContext);

  return <div>asd</div>;
};

export default Items;
