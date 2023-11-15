import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyList } from './components/MyList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyList/>
  </React.StrictMode>,
)
