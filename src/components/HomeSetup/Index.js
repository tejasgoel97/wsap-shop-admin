import BannerData from "./BannerData";
import ProductData from "./ProductData";
import SliderData from "./SliderData";

const HomeSetup = ({homeSetupData}) =>{

    return <div className="w-full mx-auto max-w-2xl">
    {homeSetupData.map(data=>{
        console.log(data)
        return (
         <div className="bg-green-50 border-2 rounded m-2 overflow-hidden cursor-pointer p-12">
             <div>Position: {data.position}</div>
             <div>type: {data.type}</div>
             {data.type === "slider" ? 
             <SliderData data={data}/>
             : 
             data.type === "products" ? 
             <ProductData data={data} />
             :
             data.type === "banner" ? 
             <BannerData data={data}/>
             : null
             }
        </div>
        )
    })}
 </div>
}

export default HomeSetup;