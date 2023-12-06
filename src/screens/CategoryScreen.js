import { useState } from "react"
import Category from "../components/Category/Index"
import useMetaData from "../hooks/useMetaData"

const CategoryScreen = () =>{
    const [tab, setTab] = useState("categories");
    
    const {metaData, loading, error, saveBrands, saveCategories, saveSubVariants, saveVariants } = useMetaData();
    if(loading){
        return <div className="m-12 p-12">Loading...</div>
    }
    console.log(metaData)
    return <div>
        <div className="flex items-center justify-center w-full mt-1">
            <div className={`px-20 py-4 cursor-pointer ${tab==="categories"? "bg-slate-200 shadow-md":"hover:bg-slate-100"}`} onClick={()=> setTab("categories")}>CATEGORIES</div>
            <div className={`px-20 py-4 cursor-pointer ${tab==="brands"? "bg-slate-200 shadow-md":"hover:bg-slate-100"}`} onClick={()=> setTab("brands")}>BRANDS</div>
            <div className={`px-20 py-4 cursor-pointer ${tab==="variant"? "bg-slate-200 shadow-md":"hover:bg-slate-100"}`} onClick={()=> setTab("variant")}>Varinat</div>
            <div className={`px-20 py-4 cursor-pointer ${tab==="subVariant"? "bg-slate-200 shadow-md":"hover:bg-slate-100"}`} onClick={()=> setTab("subVariant")}>SubVariant</div>
        </div> 
        
        <Category selectedTab={tab} metaData={metaData} saveBrands={saveBrands} saveCategories={saveCategories} saveVariants={saveVariants} saveSubVariants={saveSubVariants}/>
    </div>
}

export default CategoryScreen