import React from 'react'
import ReactDOM from 'react-dom/client'
import {TitlesContainer} from './components/TitlesContainer/'
import {ButtonContainer} from "./components/ButtonContainer/"
import { Button } from './components/Button'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitlesContainer />
    <ButtonContainer />
  </React.StrictMode>
)
