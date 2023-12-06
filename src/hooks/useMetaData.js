import { collection, getDocs, updateDoc , doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useMetaData = ()=>{
    const [metaData, setMetaData] = useState({categories:[], brands:[]});
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        async function getMetaData(){
            try{
                setLoading(true)
                setError(false)
                const querySnapshot = await getDocs(collection(db, "metaData"))
                let data = {}


                querySnapshot.forEach((doc) => {
                    if(doc.id === "categories"){
                        // categories = doc.data()
                        data = {...data,...doc.data() }
                    }
                    if(doc.id === "brands"){
                        // brands = doc.data()
                        data = {...data,...doc.data() }

                    }
                    if(doc.id === "variants"){
                        data = {...data, ...doc.data()}
                    }
                    if(doc.id === "subVariants"){
                        data = {...data, ...doc.data()}
                    }
                });
                setMetaData(data)
                setLoading(false)
                setError(false)

            }catch(err){
                console.log(err)
                setLoading(false)
                setError("Error Occoured in Loading product, Please reload the Page")
            }
        }
        getMetaData()

    }, [])

    async function saveBrands(brands){
        const brandRef = doc(db, "metaData", "brands");
        try {
            await updateDoc(brandRef, {brands})
            console.log("Hello")
            window.alert("Changes to Brands made Successfully")
        } catch (error) {
            console.error(error)
            setError("SomeThing went Wrong Please reload the page")
        }
    }
    async function saveCategories(categories){
        const brandRef = doc(db, "metaData", "categories");
        try {
            await updateDoc(brandRef, {categories})
            window.alert("Changes to Category made Successfully")
        } catch (error) {
            console.error(error)
            setError("SomeThing went Wrong Please reload the page")
        }
    }
    async function saveVariants(variants){
        const brandRef = doc(db, "metaData", "variants");
        try {
            await updateDoc(brandRef, {variants})
            window.alert("Changes to Variants made Successfully")
        } catch (error) {
            console.error(error)
            setError("SomeThing went Wrong Please reload the page")
        }
    }
    async function saveSubVariants(subVariants){
        const brandRef = doc(db, "metaData", "subVariants");
        try {
            await updateDoc(brandRef, {subVariants})
            window.alert("Changes to sub Variants made Successfully")
        } catch (error) {
            console.error(error)
            setError("SomeThing went Wrong Please reload the page")
        }
    }

    return {metaData,loading, error, saveBrands, saveCategories, saveVariants , saveSubVariants}
}

export default useMetaData;