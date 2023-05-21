import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types'
import {config} from '../config.js';
import { toast } from 'react-toastify';


const ROOT_URL = config.server.url || 'http://localhost:3001';

axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('auth_jwt_token')) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function signUserIn(data) {
  return function (dispatch) {
    // Submit email/password to server
    axios
      .post(`/signin`, data)
      .then(res => {
        dispatch({ type: AUTH_USER })
        console.log(res);
        localStorage.setItem('auth_jwt_token', res.data.token);
        localStorage.setItem('user_name', res.data.user.name);
        localStorage.setItem('user_email', res.data.user.email);
        toast.success('Signin successful, redirecting to Homepage', {
          autoClose:5000,
          closeOnClick:true,
          draggable: true
        });
        setTimeout(()=>{
          window.location = '/';
        },5000,);
        
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case "ERR_NETWORK":
            toast.error(`${error.message}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
          case "ERR_BAD_REQUEST":
            toast.error(`${error.response.data.error}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
        
          default:
            toast.error(`Unexpected error: ${error} - ${error.message}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
        }
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });
  }
}

export function signUserUp(userObj) {
  return function (dispatch) {
    // Submit email/password to server
    axios
      .post(`/signup`, userObj)
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('auth_jwt_token', res.data.token);
        localStorage.setItem('user_name', res.data.user.name);
        localStorage.setItem('user_email', res.data.user.email);
        toast.success('Signup successful, redirecting to Homepage', {
          autoClose:5000,
          closeOnClick:true,
          draggable: true
        });
        setTimeout(()=>{
          window.location = '/';
        },5000,);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
      })
      .catch(error => {
        console.log(error)
        switch (error.code) {
          case "ERR_NETWORK":
            toast.error(`${error.message}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
          case "ERR_BAD_REQUEST":
            toast.error(`${error.response.data.error}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
        
          default:
            toast.error(`Unexpected error: ${error} - ${error.message}`, {
              autoClose:5000,
              closeOnClick:true,
              draggable: true
            })
            break;
        }
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });
  }
}

export function signUserOut() {
  return function (dispatch) {
    localStorage.removeItem('auth_jwt_token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    dispatch({ type: UNAUTH_USER })
    toast.success('Signout successful, redirecting to Homepage', {
      autoClose:5000,
      closeOnClick:true,
      draggable: true
    });
    setTimeout(()=>{
      window.location = '/';
    },5000,);
  }
}

const request = axios;
export { request };