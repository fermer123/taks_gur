import React, {FC} from 'react';
import styled from 'styled-components';
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperProps} from 'swiper/react';

type SliderProps = {
  children: React.ReactNode | JSX.Element;
  // eslint-disable-next-line react/require-default-props
} & SwiperProps;

const SwiperSlider = styled(Swiper)`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const Slider: FC<SliderProps> = ({children, ...rest}) => {
  return (
    <SwiperSlider {...rest} modules={[Pagination, Navigation]}>
      {children}
    </SwiperSlider>
  );
};

export default Slider;
