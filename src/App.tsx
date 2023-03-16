import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import ItemId from './components/Pages/ItemId/ItemId';
import Items from './components/Pages/Items/Items';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Items />} />
      <Route path='/port/:id' element={<ItemId />} />
    </Routes>
  );
};
export default App;
