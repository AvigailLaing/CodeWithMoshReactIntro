import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//ReactDOM renders the component tree inside the element with the ID root
//App component is wrapped by another component called StrictMode
//We're rendering the component tree inside an element with ID root using
//the ReactDOM library
//We can also render this within a mobile app using something like React Native
