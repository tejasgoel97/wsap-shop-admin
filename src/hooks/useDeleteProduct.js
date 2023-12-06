import { collection, deleteDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useDeleteProduct = ()=>{

    const [deleteError, setDeleteError] = useState(null)
    
    
    async function deleteProduct(productId){
        try{
            setDeleteError(null)
            console.log("inside UseEffect")
            console.log(productId)
            const docRef = doc(db, "products", productId);
            const docSnap = await deleteDoc(docRef)
            console.log("doccc", docSnap)               
            
        }catch(err){
            console.log(err)

            deleteError("Error Occoured in deleting product, Please reload the Page")
        }
    }


    return {deleteError, deleteProduct}
}

export default useDeleteProduct;