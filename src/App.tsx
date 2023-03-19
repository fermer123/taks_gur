import {FC, useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/component/Header/Header';
import {CartContext} from './components/context/Context';
import ErrorComponent from './components/Pages/error/ErrorComponent';
import ItemId from './components/Pages/ItemId/ItemId';
import Items from './components/Pages/Items/Items';

const App: FC = () => {
  const {error} = useContext(CartContext);

  return (
    <>
      {error ? (
        <ErrorComponent />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/port/:id' element={<ItemId />} />
          </Routes>
        </>
      )}
    </>
  );
};
export default App;
