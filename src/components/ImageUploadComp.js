import {useEffect, useState} from 'react'
import useStorage from '../hooks/useStorage'
import ProgressBar from './ProgressBar'
const ImageUploadComp = () =>{

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    
    // My custom HOOK
    // const {progress, url, error: error2} = useStorage(file);
    
    const types = ['image/png', 'image/jpeg']

    const handleFileInput = (e) =>{
        const selectedFile = e.target.files[0]
        setError(null)
        if(selectedFile && types.includes(selectedFile.type)){
            console.log(selectedFile)
            setFile(selectedFile)
        }
        else{
            setError("please upload JPEG or PNG file")
        }

        // console.log(file)
    }

    return <div className="flex justify-center m-5 flex-col">
        <input type="file" onChange={handleFileInput}></input>
        <div className="output">
            {error && <p className="text-red-500">{error}</p>}
            {file && <img src={URL.createObjectURL(file)}/>}
        </div>
    </div>
}


export default ImageUploadComp