import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import EditProductForm from "../components/EditProduct/EditProductForm"
import useMetaData from "../hooks/useMetaData";
import AddProductForm from "../components/AddProduct/AddProductForm1";


const EditProductScreen = () =>{
    let urlParams = useParams();

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

    const {product,isProductloading, productLoadingError} = useProduct(urlParams.productId)
   
    if(product){
        return<div className="md:justify-center md:flex p-2 mt-2 w-full">
        {/* <AddProductForm1 allCat={allCat}/> */}
        <AddProductForm allCat={allCat} brands ={brands} allVariants={allVariants} allSubVariants={allSubVariants} productData={product}/>
    </div>
    }
    return <p>Hi ther</p>
}

export default EditProductScreen