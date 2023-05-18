import Home from './components/home/Home';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

import PageNotFound from './components/error/NotFoundPage';

export const routes = {
  userRoutes : {
    home:{
      element: <Home/>,
      path: "/",
      label: "Home",
      exact: true,
    },
    signin:{
      element: <Signin/>,
      path: "/signin",
      label: "Signin",
      exact: false,
    },
    signup:{
      element: <Signup/>,
      path: "/signup",
      label: "Signup",
      exact: false,
    }
  }
  ,adminRoutes:{}
  ,errorRoutes:{
    pageNotFound : {
      element: <PageNotFound/>
    }
  }
  
};
