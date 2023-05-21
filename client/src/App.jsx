import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles';

import { ToastContainer } from 'react-toastify';
import { AUTH_USER } from './actions/types';
import theme from './theme.js';
import { routes} from "./routes";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {config} from "./config"
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer';
import NotFoundPage from './components/error/NotFoundPage.jsx';

const {userRoutes, adminRoutes} = routes;
const defaultData = {
  borderRadius: 6,
  colorPrimary: '#7e2553',
  colorPrimaryBg: '#000',
};

axios.defaults.baseURL = `${config.server.url}`;

const token = localStorage.getItem('auth_jwt_token');

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({type: AUTH_USER})
}

function App() {
  const [data, setData] = React.useState(defaultData);
  const userroutes = [];
  Object.keys(userRoutes).forEach((route, index) => {
    userroutes.push({
      label:userRoutes[route].label,
      path: userRoutes[route].path,
      exact: userRoutes[route].exact,
      element: userRoutes[route].element
    })
  })
  return (
    <CssVarsProvider theme={theme}>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <ToastContainer
              position="top-center"
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              theme="light"
            />
            < Header />
            <main>
              < Routes >
                  {userroutes.map((route, index) => (
                    <Route key={`route-${index}`} element={route.element} errorElement="routes.errorRoute.element" path={route.path} exact={route.exact} />
                  ))}
                  <Route path="/*" element={<NotFoundPage/>} exact={false}></Route>
              </ Routes >
            </main>
            < Footer />
          </BrowserRouter>
        </Provider>
      </div>
    </CssVarsProvider>
  );
}

export default App;
