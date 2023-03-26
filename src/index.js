import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './Components/HomePage';
import UserDetailPage from './Components/UserDetailPage';
import UserDetailPage1 from './Components/UserDetailPage1';
import UserDetailPage2 from './Components/UserDetailPage2';
import UserDetailPage3 from './Components/UserDetailPage3';
import UserDetailPage4 from './Components/UserDetailPage4';
import UserDetailPage5 from './Components/UserDetailPage5';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/UserDetailPage',
    element:<UserDetailPage/>
  },
  {
    path:'/UserDetailPage1',
    element:<UserDetailPage1/>
  },
  {
    path:'/UserDetailPage2',
    element:<UserDetailPage2/>
  },
  {
    path:'/UserDetailPage3',
    element:<UserDetailPage3/>
  },
  {
    path:'/UserDetailPage4',
    element:<UserDetailPage4/>
  },
  {
    path:'/UserDetailPage5',
    element:<UserDetailPage5/>
  }
 ])
root.render(
  

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
