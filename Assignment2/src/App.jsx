import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginPage";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

import'./App.css';
function App() {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
