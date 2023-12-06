import { collection, getDocs } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { db } from '../../firebase/config'
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import useMetaData from '../../hooks/useMetaData';


const AllProductList = ({subCategory}) =>{
    const {products,isProductloading, productLoadingError} = useProducts()
    const {categories,isCategoriesloading, categoriesLoadingError} = useMetaData();

    const navigate = useNavigate();
    function handleProductEdit(productId){
        // if(!productId) return null
        navigate(`/editproduct/${productId}`)
    }
    if(isCategoriesloading || isProductloading) return <p>Loading...</p>
    // let filteredProducts = products.filter((product)=>{
    //     if(! subCategory) return true
    //     console.log(product.subCategory,subCategory.subCatName)
    //     return product.subCategory == subCategory.subCatName
    // })
    let filteredProducts = products;
    return (
    <div className="content-center">
        <div className="w-full mx-auto max-w-2xl" >

           {filteredProducts.map(product=>{
               return <ProductCard product={product} handleProductEdit={handleProductEdit}/>
           })}
        </div>
    </div>
    )
}


export default AllProductList