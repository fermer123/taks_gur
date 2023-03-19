import ButtonShowMore from '@src/components/component/buttonShowMore/ButtonShowMore';
import ScrollButton from '@src/components/component/scrollButton/ScrollButton';
import CardSkeleton from '@src/components/component/skeleton/Skeleton';
import {CartContext} from '@src/components/context/Context';
import {FC, useContext} from 'react';
import styled from 'styled-components';
import Item from '../Item/Item';

const CardItems = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 31px;
  @media (max-width: 980px) {
    padding: 0 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ErrorOnLoad = styled.h1`
  font-size: 14.4px;
  line-height: 17px;
  color: #8f8f8f;
  text-align: center;
  margin-bottom: 18px;
`;

const Items: FC = () => {
  const {data, addCart, loading, errorShowMore} = useContext(CartContext);
  return (
    <>
      <CardItems>
        {loading
          ? Array(20)
              .fill(0)
              // eslint-disable-next-line react/no-array-index-key
              .map((e, idx) => <CardSkeleton key={idx} />)
          : data?.map((e) => <Item {...e} addCart={addCart} key={e.id} />)}
      </CardItems>
      <ScrollButton />
      {errorShowMore ? (
        <>
          <ErrorOnLoad>Ошибка при загрузке</ErrorOnLoad>
          <ButtonShowMore title='Повторить попытку' />
        </>
      ) : (
        <ButtonShowMore title='Показать еще' />
      )}
    </>
  );
};

export default Items;
