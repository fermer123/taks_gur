import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {FC} from 'react';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 224px;
`;
const CardImage = styled.div`
  max-width: 100%;
  min-height: 260px;
  position: relative;
`;

const CardSlider = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 9px;
  z-index: 20;
  width: 100px;
`;
const FirstInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FirstInfoPrice = styled.div`
  width: 166px;
  margin-bottom: 10px;
`;
const FirstInfoLike = styled.div`
  width: 25px;
`;

const SecondThirdInfo = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const InfoPadding = styled.div`
  padding: 10px 12px;
`;

const CardSkeleton: FC = () => {
  return (
    // eslint-disable-next-line react/no-array-index-key
    <Card>
      <CardImage>
        <Skeleton height={260} />
        <CardSlider>
          <Skeleton baseColor='#F8F8F8' />
        </CardSlider>
      </CardImage>

      <InfoPadding>
        <FirstInfo>
          <FirstInfoPrice>
            <Skeleton height={25} />
          </FirstInfoPrice>
          <FirstInfoLike>
            <Skeleton height={25} />
          </FirstInfoLike>
        </FirstInfo>
        <SecondThirdInfo>
          <Skeleton height={16} />
        </SecondThirdInfo>
        <SecondThirdInfo>
          <Skeleton height={14} />
        </SecondThirdInfo>
      </InfoPadding>
    </Card>
  );
};

export default CardSkeleton;
