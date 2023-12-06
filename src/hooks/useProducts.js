import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    const [productLoadingError, setProductLoadingError] = useState(false)
    const [isProductloading, setIsProductLoading] = useState(false)
    

    useEffect(()=>{
        async function getProducts(){
            try{
                setIsProductLoading(true)
                setProductLoadingError(false)
                console.log("Hi there")
                const querySnapshot = await getDocs(collection(db, "products"))
                let products = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    products.push({productId: doc.id, ...doc.data()});
                });
                setIsProductLoading(false)
                setProductLoadingError(false)
                setProducts(products)

            }catch(err){
                console.log(err)
                setIsProductLoading(false)
                setProductLoadingError("Error Occoured in Loading product, Please reload the Page")
            }
        }
        getProducts()

    }, [])

    return {products,isProductloading, productLoadingError}
}

export default useProducts;