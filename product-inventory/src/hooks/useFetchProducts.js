//https://fakestoreapi.com/products

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
            setProducts(res.data)
            setLoading(false)
        })
        .catch(err =>{
            setError(err)
            setLoading(false)
        })
    },[])
  return {products, loading, error}
}

export default useFetchProducts