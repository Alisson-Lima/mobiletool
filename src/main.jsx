import React from 'react'
import ReactDOM from 'react-dom/client'
import {TitlesContainer} from './components/TitlesContainer/'
import {ButtonContainer} from "./components/ButtonContainer/"
import { Button } from './components/Button/'
import {Menu} from './components/Menu/'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <TitlesContainer />
    <ButtonContainer />
  </React.StrictMode>
)
