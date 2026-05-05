import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { ButtonPage } from './pages/docs/ButtonPage'
import { SwitchPage } from './pages/docs/SwitchPage'
import { CheckboxPage } from './pages/docs/CheckboxPage'
import { InputPage } from './pages/docs/InputPage'
import { DialogPage } from './pages/docs/DialogPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs/button' element={<ButtonPage />} />
        <Route path='/docs/switch' element={<SwitchPage />} />
        <Route path='/docs/checkbox' element={<CheckboxPage />} />
        <Route path='/docs/input' element={<InputPage />} />
        <Route path='/docs/dialog' element={<DialogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
