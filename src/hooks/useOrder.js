import { collection, getDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useOrder = (orderId)=>{
    const [order, setOrder] = useState(null);
    const [orderLoadingError, setOrderLoadingError] = useState(false)
    const [isOrderloading, setIsOrderLoading] = useState(true)
    
    
    useEffect(()=>{
        async function getOrder(){
            try{
                setIsOrderLoading(true)
                setOrderLoadingError(false)
                console.log("inside UseEffect")
                console.log(orderId)
                const docRef = doc(db, "orders", orderId);
                const docSnap = await getDoc(docRef)
                console.log(docSnap.data())
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setOrder({...docSnap.data(),id:orderId })
                    setIsOrderLoading(false)
                    setOrderLoadingError(false)
                  } else {
                    // doc.data() will be undefined in this case
                    new Error("No such document!");
                  }
                
                
            }catch(err){
                console.log(err)
                setIsOrderLoading(false)
                console.log(err)
                setOrderLoadingError("Error Occoured in Loading order, Please reload the Page")
            }
        }
        getOrder()

    }, [orderId])

    return {order,isOrderloading, orderLoadingError}
}

export default useOrder;