import {Container} from '@mui/system';
import {FC, useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/component/Header/Header';
import {CartContext} from './components/context/Context';
import ErrorComponent from './components/Pages/error/ErrorComponent';
import ItemId from './components/Pages/ItemId/ItemId';
import Items from './components/Pages/Items/Items';

const AppContainer = styled(Container)`
  max-width: 1280px;
  margin: 0 auto;
`;

const App: FC = () => {
  const {error} = useContext(CartContext);

  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <AppContainer>
          <Header />
          <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/port/:id' element={<ItemId />} />
          </Routes>
        </AppContainer>
      )}
    </>
  );
};
export default App;
