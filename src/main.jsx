import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from './Routes/Routers.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <RouterProvider router={router}></RouterProvider> */}

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        
        <RouterProvider router={router}></RouterProvider>

      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
