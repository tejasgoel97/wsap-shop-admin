

const BannerData = ({data}) =>{

    return <div>
    <div className="h-40 w-100 bg-green-900 overflow-hidden">
        <img src={data.value.imgUrl}/>
    </div>
    <div className="flex justify-around">
        <p>Screen: {data.value.navScreen} </p>
        <p>To: {data.value.navValue} </p>
    </div>
</div>
}


export default BannerData