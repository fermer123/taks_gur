import {CartContext} from '@src/components/context/Context';
import {FC, useContext} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  max-width: 124px;
  padding: 8px 15px;
  color: #00a0ab;
  background-color: #ffffff;
  font-weight: 500;
  line-height: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 45px;
`;

const ButtonShowMore: FC = () => {
  const {showMore} = useContext(CartContext);
  return (
    <Button onClick={() => showMore(20)} type='button'>
      Показать еще
    </Button>
  );
};

export default ButtonShowMore;
