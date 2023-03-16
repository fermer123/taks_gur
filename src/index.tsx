import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {CartProvider} from './components/context/Context';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </BrowserRouter>,
);
