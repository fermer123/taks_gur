import React, {FC} from 'react';
import styled from 'styled-components';
import {Pagination} from 'swiper';
import {Swiper, SwiperProps} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

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
    <SwiperSlider slidesPerView={1} modules={[Pagination]} pagination {...rest}>
      {children}
    </SwiperSlider>
  );
};

export default Slider;
