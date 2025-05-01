import './App.css'

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from './pages/dashboard'
import AllCategory from 'pages/allCatelouge'
import SubCategory from 'pages/subCategory'
import AddCartDetails from 'pages/addCartDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/home" exact element={<Dashboard />}></Route>
          <Route path="/category" exact element={<AllCategory />}></Route>
          <Route path="/subcategory" exact element={<SubCategory />}></Route>
          <Route path="/cart" exact element={<AddCartDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
