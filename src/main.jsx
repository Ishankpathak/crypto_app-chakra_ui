import App from './App'
import './index.css'
import * as React from 'react'
import { ChakraProvider , theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>
)

export const server = `https://api.coingecko.com/api/v3`