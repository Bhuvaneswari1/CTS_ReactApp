import React from 'react'
import PropTypes from'prop-types';


const ProductCard = ({product}) => {
  return (
    <div style={{border: '1px solid #ccc', padding:10, margin:10, width:250}}>
        <img src={product.image || ''} alt={product.title || 'No title'} width="100" height="100" />
        <h3>{product.title || 'No title Available'}</h3>
        <p>
            {typeof product.price === 'number'?
            `$${product.price.toFixed(2)}`:
            'Price not available'}
        </p>
    </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number
    }).isRequired
}
export default ProductCard