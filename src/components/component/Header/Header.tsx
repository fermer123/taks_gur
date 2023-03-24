import {Box} from '@mui/system';
import {FC} from 'react';
import styled from 'styled-components';
import GroupA from '@src/image/group1.svg';
import GroupB from '@src/image/group2.svg';

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

const StyledIconA = styled(GroupA)`
  stroke: #c7c7c7;
  &:hover {
    stroke: #a4a4a4;
    cursor: pointer;
  }
  &:active {
    stroke: #00a0ab;
  }
`;
const StyledIconB = styled(GroupB)`
  stroke: #c7c7c7;
  &:hover {
    stroke: #a4a4a4;
    cursor: pointer;
  }
  &:active {
    stroke: #00a0ab;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <ButtonGroup>
        <StyledIconA />
        <StyledIconB />
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;
