import { useState } from "react"
import DropDownMenu from "../DropDownMenu"


const SliderData = ({data}) =>{

    return (
    <div>   
        {data.value.map((val, index)=>{
        return <SliderSingleComp val={val} key={index}/>})}
    </div>
    )
}

const SliderSingleComp = ({val}) =>{
    const screenOptions = [{name: "Sub Category",id: "Sub Category", value:"subcategory"}, {name:"Product",id:"Product", value:"product"}]
    const [imgUrl, setImgUrl] = useState(val.imgUrl);
    const [navValue, setnavValue] = useState(val.navValue);
    const [navScreen, setnavScreen] = useState(()=>screenOptions.find(option=> option.value === val.navScreen));
    console.log(navScreen)
    return <div className="bg-white m-2  p-2 shadow-md my-9">
    <div className="h-60 w-100 bg-green-900">
        <img src={imgUrl}/>
        <input value={imgUrl} onChange={(e)=> setImgUrl(e.target.value)} className='w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'></input>

    </div>
    <div className="flex justify-around">
        <DropDownMenu options={screenOptions} selected={navScreen} setSelected={setnavScreen} nameField="name"></DropDownMenu>
        <p>To: {navValue}</p>
    </div>
    <div className="flex justify-end">
        <button disabled className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Change</button>
    </div>
</div>
}

export default SliderData