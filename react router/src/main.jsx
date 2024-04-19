import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

    const router = createBrowserRouter([{
      path:'/',
      element : <layout/>,
      Children : [{
        path :"",
        element : <Home/>
      },{
        path :"about",
       element : <About/>
      }]
    }]);
    <RouterProvider router={router}/>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  </React.StrictMode>,
)
