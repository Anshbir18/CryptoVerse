import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./app/store.js"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux'


import  {Homepage,Exchanges,Cryptocurrencies,News,Cryptodetails} from './Components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Homepage/>
      },
      {
        path:"cryptocurrencies",
        element:<Cryptocurrencies/>
      },
      {
        path:"exchanges",
        element:<Exchanges/>
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"crypto/:coinId",
        element:<Cryptodetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
