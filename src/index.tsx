import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import {CartProvider} from './components/context/Context';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </HashRouter>,
);
