import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const AnotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank',
  },
  children: 'Click me to go to Google',
}

const areactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to go to Google',
)

createRoot(document.getElementById('root')).render(
    <App />
    // AnotherElement
    // areactElement
)
