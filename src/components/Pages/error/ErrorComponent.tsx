import {Box} from '@mui/system';
import {FC} from 'react';
import styled from 'styled-components';

const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 251px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorContainerTitle = styled.h1`
  text-transform: uppercase;
  font-family: 'Ubuntu';
  color: #00a0ab;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 9px;
`;

const ErrorContainerInfo = styled.p`
  font-family: 'Ubuntu';
  color: #8f8f8f;
  font-size: 14.4px;
  line-height: 17px;
  text-align: center;
`;
const ErrorComponent: FC = () => {
  return (
    <ErrorContainer>
      <ErrorContainerTitle>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</ErrorContainerTitle>
      <ErrorContainerInfo>
        Простите, по вашему запросу товаров сейчас нет. Задайте запрос
        по-другому или измените характеристики
      </ErrorContainerInfo>
    </ErrorContainer>
  );
};

export default ErrorComponent;
