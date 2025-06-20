import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListItem from './components/item/ListItem.jsx'
import Auth from './components/signup/Auth.jsx'
import AddItem from './components/item/AddItem.jsx'
import View from './admin/View.jsx'
import UpdateItem from './components/item/UpdateItem.jsx'
import Login from './components/login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListItem />
      },
      {
        path: '/signup',
        element: <Auth />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/add',
        element: <AddItem />
      },
      {
        path: '/admin',
        element: <View />
      },
      {
        path: '/edit/:id',
        element: <UpdateItem />
      }
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
