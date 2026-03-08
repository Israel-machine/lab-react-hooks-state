import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (productId) => {
    const addedItem = sampleProducts.find((product) => product.id == productId)
    setCartItems([...cartItems, addedItem])
  }

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all")
  const handleCategoryFiltering = (event) => {
    const selectedCategory = event.target.value
    setCategory(selectedCategory)
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={handleCategoryFiltering}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList handleAddToCart={handleAddToCart} category={category} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
