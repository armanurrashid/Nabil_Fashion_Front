import './App.css'

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from './pages/dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/home" exact element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
