import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { AboutUs, ContactUs, GitHub, Home, Login, User } from './components'
import { githubInfoLoader } from './components/Github/GitHub'

// const router = createBrowserRouter([
//   { 
//     path:"/",
//     element: <Layout/>,
//     children  : [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element:<AboutUs/>
//       },
//       {
//         path:"/contact",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route 
      loader={githubInfoLoader}
      path="/github"
      element={<GitHub/>}/>
      <Route path="/user/:id" element={<User/>}/>
      <Route path="/login" element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
