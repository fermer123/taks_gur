import {FC, memo, useMemo} from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import {CardContent, Chip, Typography} from '@mui/material';
import {CartItem} from '@src/components/types/types';
import Slider from '@src/components/component/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import formatDate from '@src/components/component/dateFormat/dateFormat';
import {NavLink} from 'react-router-dom';
import {IMAGES} from '@src/components/axios/Api';
import Like from '@src/image/like.svg';

const CardItem = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 224px;
  @media (max-width: 980px) {
    max-width: 100%;
  }
`;

const CardItemHeaderSeen = styled(Chip)`
  font-family: 'Ubuntu';
  font-size: 12px;
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
  font-family: 'Ubuntu';
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
  font-family: 'Ubuntu';
  color: #2c2c2c;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CardItemFooter = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: #8f8f8f;

  &:last-child {
    padding: 0;
  }
`;

const CardItemAddress = styled(Typography)`
  font-family: 'Ubuntu';
  font-size: 12px;
`;

const CardItemsDate = styled(Typography)`
  font-family: 'Ubuntu';
  font-size: 12px;
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

interface ItemProps extends CartItem {
  addCart: (item: CartItem) => void;
}

const Item: FC<ItemProps> = ({
  seen,
  price,
  title,
  address,
  createdAt,
  about,
  id,
  addCart,
}) => {
  const trueDate = useMemo(() => {
    return formatDate(createdAt);
  }, [createdAt]);

  return (
    <CardItem>
      <NavLink to={`port/${id}`}>
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
                src={require(`../../../image/${e}`)}
              />
            </SwiperSlide>
          ))}
          {seen && <CardItemHeaderSeen label='Просмотрено' />}
        </CardItemHeader>
      </NavLink>
      <CardItemInfo>
        <CardItemInfoPrice fontWeight='700' fontSize='24px'>
          <>{price} ₽</>
          <StyledIcon
            onClick={() =>
              addCart({
                price,
                about,
                address,
                createdAt,
                id,
                title,
                seen,
              })
            }
          />
        </CardItemInfoPrice>
        <CardItemTitle>{title}</CardItemTitle>
        <CardItemFooter>
          <CardItemAddress>{address.split(' ').slice(0, -1)}</CardItemAddress>
          <CardItemsDate>{trueDate}</CardItemsDate>
        </CardItemFooter>
      </CardItemInfo>
    </CardItem>
  );
};

export default memo(Item);
