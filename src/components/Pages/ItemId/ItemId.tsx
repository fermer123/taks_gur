import {FC, useContext, useEffect, useMemo, useState} from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import {CardContent, Chip, Typography} from '@mui/material';
import {CartItem} from '@src/components/types/types';
import Slider from '@src/components/component/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import formatDate from '@src/components/component/dateFormat/dateFormat';
import {useParams} from 'react-router-dom';
import axios from '@src/components/axios';
import IMAGES from '@src/components/axios/Api';
import Like from '@src/image/like.svg';
import {CartContext} from '@src/components/context/Context';

const CardItem = styled(Card)<{vertical: boolean | string}>`
  display: flex;
  flex-direction: ${(vertical) => (vertical ? 'row' : 'column')};
  max-width: ${({vertical}) => (vertical ? '472px' : '224px')};
  margin: 0 auto;
`;

const CardItemHeaderSeen = styled(Chip)`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  top: 11px;
  max-width: 100%;
  padding: 5px 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const CardItemInfo = styled(CardContent)`
  padding: 10px 12px 19px;
`;

const CardItemInfoPrice = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #2c2c2c;
`;

const StyledIcon = styled(Like)`
  width: 20px;
  height: 19px;
  fill: #c7c7c7;
  &:hover {
    fill: #a4a4a4;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    fill: #00a0ab;
  }
`;

const CardItemTitle = styled(Typography)`
  color: #2c2c2c;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CardItemFooter = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: #8f8f8f;
  font-size: 12px;
  &:last-child {
    padding: 0;
  }
`;

const CardItemHeader = styled(Slider)`
  position: relative;
  width: 100%;
  min-height: 260px;
  margin-bottom: 10px;
  &.swiper-pagination-bullet {
    background: #c7c7c7;
  }
  & .swiper-pagination-bullet {
    background: #00a0ab;
  }
`;

const ItemID: FC = () => {
  const [data, setData] = useState({} as CartItem);
  const {id} = useParams();
  const {vertical} = useContext(CartContext);
  const {seen, price, title, address, createdAt} = data;

  const fetchDataItem = async (itemId: string) => {
    const resp = await axios<CartItem>(`/${itemId}`);
    setData(resp.data);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchDataItem(id);
  }, [id]);
  const trueDate = useMemo(() => {
    return formatDate(createdAt ?? '');
  }, [createdAt]);
  return (
    <CardItem vertical={vertical.toString()}>
      <CardItemHeader>
        {IMAGES.map((e) => (
          <SwiperSlide key={e}>
            <img
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '260px',
                width: '100%',
              }}
              alt={title}
              // eslint-disable-next-line import/no-dynamic-require, global-require
              src={require(`../../../image/${e}`)}
            />
          </SwiperSlide>
        ))}
        {seen && <CardItemHeaderSeen label='Просмотрено' />}
      </CardItemHeader>

      <CardItemInfo>
        <CardItemInfoPrice fontWeight='700' fontSize='24px'>
          <>{price} ₽</>
          <StyledIcon />
        </CardItemInfoPrice>
        <CardItemTitle>{title}</CardItemTitle>
        <CardItemFooter>
          <Typography>{address?.split(' ').slice(0, -1)}</Typography>
          <Typography>{trueDate}</Typography>
        </CardItemFooter>
      </CardItemInfo>
    </CardItem>
  );
};

export default ItemID;
