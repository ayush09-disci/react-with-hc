import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./store/store.js"
import AuthLayout from './components/AuthLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AddPortfolio from './pages/AddPortfolio.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element : (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element : (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:"/add-portfolio",
        element: (
          <AuthLayout authentication={true}>
            <AddPortfolio/>
          </AuthLayout>
        )
      },
      {
        path:"/portfolio/:slug",
        element: (
          <AuthLayout authentication={true}>
            <Portfolio/>
          </AuthLayout>
        )
      },
      {
        path:"/profile",
        element: (
          <AuthLayout authentication={true}>
            <Profile/>
          </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)


 // if autheticated
      //home
      //add portfolio
      //profolio/$id
      //profile
      //logout

      //if not autheticated 
      //login 
      //SignUp
      //home => please login to see portfolio