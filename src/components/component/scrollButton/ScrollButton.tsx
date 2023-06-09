import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import up from '@src/image/up.svg?url';

const ScrollButtonBox = styled.button`
  font-family: 'Ubuntu';
  position: fixed;
  top: 10%;
  left: 5%;
  max-width: 106px;
  padding: 17px 19px 17px 47px;
  color: #8f8f8f;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  background: #ffffff url(${up}) no-repeat 18px center;
  z-index: 20;
`;

const ScrollButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollButtonBox
      style={isVisible ? {display: 'block'} : {display: 'none'}}
      onClick={scrollToTop}
      type='button'>
      Вверх
    </ScrollButtonBox>
  );
};

export default ScrollButton;
