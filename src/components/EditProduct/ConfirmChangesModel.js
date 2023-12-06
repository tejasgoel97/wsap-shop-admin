import { doc, updateDoc } from "@firebase/firestore"
import { db } from "../../firebase/config"


const ConfirmChangesModel = ({finalProduct, initialProduct, setConfirmModel, productId}) =>{
    console.log(finalProduct)
    console.log( initialProduct)

    async function handleUpdate(){
        const docRef = doc(db, "products", productId)
        try{
        const querySnap = await updateDoc(docRef, finalProduct)
        console.log(querySnap)
        }catch(err){

        }
    }
    return <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="w-1/2 bg-white">
            <div>
                <p className="text-center text-2xl text-zinc-800">Please Review Changes</p>
            {!(initialProduct.productName=== finalProduct.productName) &&
                    <div className="bg-slate-300 p-1 rounded-lg m-1">
                        <p className="text-xl font-bold">Product Name</p>
                        <p className="text-red-700">Old -- {initialProduct.productName}</p>
                        <p className="text-green-700">New -- {finalProduct.productName}</p>
                    </div>
                }
                {!(initialProduct.MRP==finalProduct.MRP) &&
                    <div className="bg-slate-300 p-1 rounded-lg m-1">
                        <p className="text-xl font-bold">MRP</p>
                        <p className="text-red-700">Old -- {initialProduct.MRP}</p>
                        <p className="text-green-700">New -- {finalProduct.MRP}</p>
                    </div>
                }
                {!(initialProduct.SP=== finalProduct.SP) &&
                    <div className="bg-slate-300 p-1 rounded-lg m-1">
                        <p className="text-xl font-bold">SP</p>
                        <p className="text-red-700">Old -- {initialProduct.SP}</p>
                        <p className="text-green-700">New -- {finalProduct.SP}</p>
                    </div>
                }
            </div>
            <div className="flex ">
            <button className="bg-red-500 rounded m-1 flex-1 hover:text-rose-50  p-1 w-1/3" onClick={()=>setConfirmModel(false)}> Go Back</button>
            <button className="bg-green-500 rounded m-1 p-1  flex-1 w-1/3" onClick={()=>handleUpdate()}> Confirm</button>
            </div>
        </div>
    </div>
}

export default ConfirmChangesModel