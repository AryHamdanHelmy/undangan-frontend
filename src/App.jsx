import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invitation from './pages/Invitation'
import Admin from './pages/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/undangan/:slug" element={<Invitation />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}