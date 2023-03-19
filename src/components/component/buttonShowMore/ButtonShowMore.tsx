import {CartContext} from '@src/components/context/Context';
import {FC, useCallback, useContext, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
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
const ButtonSkeleton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 45px;
`;

interface ButtonShowMoreProps {
  title: string;
}

const ButtonShowMore: FC<ButtonShowMoreProps> = ({title}: {title: string}) => {
  const {loading, errorShowMore} = useContext(CartContext);
  const {showMore} = useContext(CartContext);
  const [page, setPage] = useState(3);

  const setPageNumber = useCallback(() => {
    if (errorShowMore) return;
    showMore(page);
    setPage((prev) => prev + 1);
  }, [page, showMore]);

  return (
    <>
      {loading ? (
        <ButtonSkeleton>
          <Skeleton height={32} width={124} />
        </ButtonSkeleton>
      ) : (
        <Button visible={page >= 10} onClick={setPageNumber} type='button'>
          {title}
        </Button>
      )}
    </>
  );
};

export default ButtonShowMore;
