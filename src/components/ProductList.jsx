import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ handleAddToCart, category }) => {
  const filteredProducts = () => {
    if (category === "Fruits") {
      const fruitProducts = sampleProducts.filter((product) => product.category === category)
      return fruitProducts
    } else if (category === "Dairy") {
      const dairyProducts = sampleProducts.filter((product) => product.category === category)
      return dairyProducts
    } else if (category === "all") {
      return sampleProducts
    } else {
      return []
    }
  }
  const products = filteredProducts()
  return (
    <div>
      <h2>Available Products</h2>
      {products.length === 0 ? "No products available" : products.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}

export default ProductList
