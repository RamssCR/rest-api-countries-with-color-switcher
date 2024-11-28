import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Country from './views/Country'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/:code' element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
