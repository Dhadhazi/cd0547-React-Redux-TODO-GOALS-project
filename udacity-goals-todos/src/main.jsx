import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import { thunk } from 'redux-thunk'
import checker from './middleware/checker'
import logger from './middleware/logger'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

// Replaced createStore with configureStore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, checker, logger)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)