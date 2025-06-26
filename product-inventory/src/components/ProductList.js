import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
        {products.map(product=>(
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList