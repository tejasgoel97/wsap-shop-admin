import { collection, getDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useProduct = (productId)=>{
    const [product, setProduct] = useState(null);
    const [productLoadingError, setProductLoadingError] = useState(false)
    const [isProductloading, setIsProductLoading] = useState(false)
    
    
    useEffect(()=>{
        async function getProduct(){
            try{
                setIsProductLoading(true)
                setProductLoadingError(false)
                console.log("inside UseEffect")
                console.log(productId)
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef)
                console.log(docSnap.data())
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setIsProductLoading(false)
                    setProductLoadingError(false)
                    setProduct({...docSnap.data(),id:productId })
                  } else {
                    // doc.data() will be undefined in this case
                    new Error("No such document!");
                  }
                
                
            }catch(err){
                console.log(err)
                setIsProductLoading(false)
                console.log(err)
                setProductLoadingError("Error Occoured in Loading product, Please reload the Page")
            }
        }
        getProduct()

    }, [productId])

    return {product,isProductloading, productLoadingError}
}

export default useProduct;