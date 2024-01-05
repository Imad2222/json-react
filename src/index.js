import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import ContextApi from './context/ContextApi.js'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
// Importation du fichier CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// ... Autres imports et code de configuration de React ...



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
      <BrowserRouter>
        <ContextApi>
          <App />
        </ContextApi>
      </BrowserRouter>
    </ChakraProvider>

  </>,
)