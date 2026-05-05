import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { ButtonPage } from './pages/docs/ButtonPage'
import { SwitchPage } from './pages/docs/SwitchPage'
import { CheckboxPage } from './pages/docs/CheckboxPage'
import { InputPage } from './pages/docs/InputPage'
import { DialogPage } from './pages/docs/DialogPage'
import { SelectPage } from './pages/docs/SelectPage'
import { TabsPage } from './pages/docs/TabsPage'
import { TooltipPage } from './pages/docs/TooltipPage'
import { MenuPage } from './pages/docs/MenuPage'
import { AccordionPage } from './pages/docs/AccordionPage'
import { SliderPage } from './pages/docs/SliderPage'
import { PopoverPage } from './pages/docs/PopoverPage'

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
        <Route path='/docs/select' element={<SelectPage />} />
        <Route path='/docs/tabs' element={<TabsPage />} />
        <Route path='/docs/tooltip' element={<TooltipPage />} />
        <Route path='/docs/menu' element={<MenuPage />} />
        <Route path='/docs/accordion' element={<AccordionPage />} />
        <Route path='/docs/slider' element={<SliderPage />} />
        <Route path='/docs/popover' element={<PopoverPage />} />
      </Routes>
    </BrowserRouter>
  )
}
