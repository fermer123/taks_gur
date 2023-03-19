import ButtonShowMore from '@src/components/component/buttonShowMore/ButtonShowMore';
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

const Items: FC = () => {
  const {data, addCart} = useContext(CartContext);
  return (
    <>
      <CardItems>
        {data?.map((e) => (
          <Item {...e} addCart={addCart} key={e.id} />
        ))}
      </CardItems>
      <ButtonShowMore />
    </>
  );
};

export default Items;
