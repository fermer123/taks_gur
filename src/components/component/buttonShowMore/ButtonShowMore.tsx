import {CartContext} from '@src/components/context/Context';
import {FC, useContext} from 'react';

const ButtonShowMore: FC = () => {
  const {showMore} = useContext(CartContext);
  return (
    <button onClick={() => showMore(20)} type='button'>
      Показать еще
    </button>
  );
};

export default ButtonShowMore;
