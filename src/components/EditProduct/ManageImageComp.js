import {useRef} from 'react'
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import useStorage from "../../hooks/useStorage";

const ManageImageComp = ({images, setImages, product,productId}) =>{
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const [newImgUrl, setNewImgUrl] = useState(null)

    const imgUrlRef = useRef();

    const {progress, url, error: error2} = useStorage(file);
    console.log(images)
    useEffect(()=>{
        if(!url) return ;
        const productRef = doc(db, "products", productId);
        console.log(product)
        let Img = {imgUrl: url, altText: file?.name || "Nature Hub"}
        try{
            updateDoc(productRef, {
            images: arrayUnion({imgUrl: url, altText: file?.name || "Nature Hub"})
            }).then((res)=> {
                console.log(res)
                setFile(null)
                setImages([...images, {imgUrl: url, altText: file?.name || "Nature Hub"} ])
            })
            console.log(Img)
        }catch(e){
            console.log(e)
        }
        
    }, [url])
    

    function handleImageDelete(image, index){
        const productRef = doc(db, "products", productId);
        try{
            updateDoc(productRef, {
                images: arrayRemove(image)
            }).then(res=>{
                console.log(res)
                setImages(images=>{
                    let newArr = [...images];
                    newArr.splice(index,1)
                    console.log("new", index, newArr)
                    return newArr
                })
            })
        }catch(e){
            console.log(e)
        }
    }
    function handleFileInput(e){
        const types = ["image/png", "image/jpeg"];
        const selectedFile = e.target.files[0];
        setError(null);
        if (selectedFile && types.includes(selectedFile.type)) {
          console.log(selectedFile);
          setFile(selectedFile);
        } else {
          setError("please upload JPEG or PNG file");
        }
      };
      function handleKeyDown(e){
          
          const url = imgUrlRef.current.value
          if(e.key ==="Enter"){
            const productRef = doc(db, "products", productId);
            console.log(product)
            let Img = {imgUrl: url, altText: product.productName}
            try{
                updateDoc(productRef, {
                images: arrayUnion({imgUrl: url, altText: product.productName})
                }).then((res)=> {
                    console.log(res)
                    setFile(null)
                    setImages([...images, {imgUrl: url, altText: product.productName} ])
                })
                console.log(Img)
                alert("Image was Uploaded")
                imgUrlRef.current.value = ""
            }catch(e){
                
                console.log(e)
                alert("ERROR: The Image was Not Uploaded")

            }
          }
      }
    return<div>
        {images && <div className='flex flex-wrap'>
                {images.map((image, index)=>{
                    return <div className="w-24 h-24 m-2 rounded-lg overflow-hidden relative shadow-sm shadow-gray-600" key={index} >
                        <span className="absolute right-0 p-1 bg-white-500 text-black bg-yellow-300 hover:bg-red-500 cursor-pointer rounded-bl-lg" ><img src="https://img.icons8.com/ios-glyphs/20/000000/filled-trash.png" onClick={()=> handleImageDelete(image, index)}/></span>
                        <img src={image.imgUrl}></img>
                    </div>
                })}
                </div>}
                <div>
                <div className="w-34 h-24 m-2  flex justify-center items-center cursor-pointer text-violet-200 rounded hover:bg-slate-100 hover:text-violet-600">
                <input type="file" className="block w-full text-sm text-slate-500  file:mr-4 file:py-2 file:px-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" onChange={handleFileInput}></input>
                <input 
                className ="rounded peer pl-2 pr-2 py-1 border-2  border-gray-200 placeholder-gray-300" 
                type="text"
                placeholder='Enter the Image URL'
                onKeyDown={handleKeyDown}
                ref={imgUrlRef}
                
            />
                </div>
            </div>
    </div>
};

export default ManageImageComp;