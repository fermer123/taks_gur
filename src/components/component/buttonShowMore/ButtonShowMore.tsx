import {CartContext} from '@src/components/context/Context';
import {FC, useCallback, useContext, useState} from 'react';
import styled from 'styled-components';

const Button = styled.button<{visible: boolean}>`
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
  display: ${(props) => (props.visible ? 'none' : 'block')};
`;

const ButtonShowMore: FC = () => {
  const {showMore} = useContext(CartContext);
  const [page, setPage] = useState(3);

  const setPageNumber = useCallback(() => {
    showMore(page);
    setPage((prev) => prev + 1);
  }, [page, showMore]);

  return (
    <Button visible={page >= 10} onClick={setPageNumber} type='button'>
      Показать еще
    </Button>
  );
};

export default ButtonShowMore;
