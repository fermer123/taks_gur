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
`;

const Items: FC = () => {
  const {data} = useContext(CartContext);
  return (
    <CardItems>
      {data?.map((e) => (
        <Item {...e} key={e.id} />
      ))}
    </CardItems>
  );
};

export default Items;