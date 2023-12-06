import { collection, getDocs } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"

const useHomeSetup = () =>{
    const [loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)
    const [homeSetupData, setHomeSetupData] = useState(null)

    useEffect(()=>{
        setLoading(true)
        setError(null)
        getDocs(collection(db, "home"))
        .then((querySnapshot)=> {
            const data = []
            querySnapshot.forEach((doc) => {
            data.push({id: doc.id , ...doc.data()})
            })  
            const sortedData = data.sort((a,b)=> a.position>b.position)
            setHomeSetupData(sortedData)
            setLoading(false)
            setError(null)
        })
        .catch(err=> {
            setError("Error occoured, please retry")
            setLoading(false)
        })
    }, [])
    return {loading, error, homeSetupData}
}

export default useHomeSetup;