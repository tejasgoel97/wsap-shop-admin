import { useEffect, useState } from "react"
import {collection, getDocs, addDoc, getDoc} from 'firebase/firestore'

import {useNavigate} from 'react-router-dom'
import AllProductList from "../components/AllProducts/AllProductList"

import useMetaData from "../hooks/useMetaData"


function HomeScreen() {
    const navigate = useNavigate()
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);

    const {categories,isCategoriesloading, categoriesLoadingError} = useMetaData();

    function handleCategorySelect(cat){
        setCategory(cat)
        setSubCategory(null)
       }

    return<div className="my-5">
        {/* <div className="w-3/6 mx-auto">
        </div>
        {categories && <div className="flex justify-center space-x-2 flex-1  w-3/6 mx-auto">
            <DropDownMenu options = {categories} selected={category} setSelected = {handleCategorySelect} nameField="catName" placeHolder="Select Category"/>
            {category && <DropDownMenu options = {category.subCat} selected={subCategory} setSelected = {setSubCategory} nameField="subCatName" placeHolder="Select Sub Category"/>}
            {category && <button className="bg-gray-700 p-1 rounded text-white" onClick={()=> setCategory(null)}> Reset</button>}
        </div>}*/}
        <AllProductList subCategory={subCategory}/> 
    </div>
}


export default HomeScreen