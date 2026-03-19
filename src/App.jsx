import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fontainebleau from './pages/Fontainebleau'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontainebleau-miami" element={<Fontainebleau />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App