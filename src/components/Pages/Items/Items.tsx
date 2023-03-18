import {Grid} from '@mui/material';
import {CartContext} from '@src/components/context/Context';
import {FC, useContext} from 'react';
import styled from 'styled-components';
import Item from '../Item/Item';

const CardItems = styled(Grid)``;

const Items: FC = () => {
  const {data} = useContext(CartContext);
  console.log(data);
  return (
    <Grid container spacing={1}>
      {data?.map((e) => (
        <Item {...e} key={e.id} />
      ))}
    </Grid>
  );
};

export default Items;
