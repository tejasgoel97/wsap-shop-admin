import AddProductForm from "../components/AddProduct/AddProductForm1";
import AddProductForm1 from '../components/AddProductForm1';
import useMetaData from '../hooks/useMetaData';


export default function AddProduct() {
    // const [allCat, setAllCat] = useState([]);
    const {metaData, loading} = useMetaData()
    
    // useEffect(()=>{
    //     const catRef = collection(db, "categories")
    //     getDocs(catRef).then(snapshot=> {
    //         let Categories = []
    //         snapshot.forEach(doc=>{
    //             Categories.push(doc.data())
    //             console.log(doc.id, " => ", doc.data());
    //         })
    //         setAllCat(Categories)
    //     })
    // }, [])
    const allCat = metaData.categories
    const brands = metaData.brands
    const allVariants = metaData.variants;
    const allSubVariants = metaData.subVariants;


    if(loading) return <h1>Loading</h1>
    return<div className="md:justify-center md:flex p-2 mt-2 w-full">
        {/* <AddProductForm1 allCat={allCat}/> */}
        <AddProductForm allCat={allCat} brands ={brands} allVariants={allVariants} allSubVariants={allSubVariants} />
    </div>
}