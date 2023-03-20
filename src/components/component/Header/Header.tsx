import {Box} from '@mui/system';
import {FC} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonGroup = styled(Box)`
  padding: 35px 35px 26px 0;
  display: flex;
  gap: 16px;
`;

const StyledIcon = styled.svg`
  width: 31px;
  height: 31px;
  &:hover {
    fill: #a4a4a4;
    cursor: pointer;
  }
  &:active {
    fill: #00a0ab;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <ButtonGroup>
        <button type='button'>
          <StyledIcon
            width='31'
            height='31'
            viewBox='0 0 31 31'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              x='1.1'
              y='1.1'
              width='11.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
            <rect
              x='18.1'
              y='1.1'
              width='11.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
            <rect
              x='1.1'
              y='18.1'
              width='11.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
            <rect
              x='18.1'
              y='18.1'
              width='11.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
          </StyledIcon>
        </button>
        <button type='button'>
          <StyledIcon
            width='31'
            height='31'
            viewBox='0 0 31 31'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              x='1.1'
              y='18.1'
              width='28.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
            <rect
              x='1.1'
              y='1.1'
              width='28.8'
              height='11.8'
              rx='1.9'
              stroke='#C7C7C7'
              strokeWidth='2.2'
            />
          </StyledIcon>
        </button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;
