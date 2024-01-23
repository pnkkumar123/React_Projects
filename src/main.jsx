import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ DataProvider} from './Context/DataApi.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CategoryProvider } from './Context/CategoryApi.jsx'
import { FilterContextProvider } from './Context/CategoryFilter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <CategoryProvider>
        < FilterContextProvider>
    <App />
        </FilterContextProvider>
       

       
      </CategoryProvider>

    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
