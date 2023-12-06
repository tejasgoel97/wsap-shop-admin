import useStorage from "../hooks/useStorage"


const ProgressBar = ({file, setFile}) =>{
const {url, error, progress} = useStorage(file)
    return (<>
        <div>ProgressBar</div>
        <div className="w-full bg-gray-200 rounded-full">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"> {progress}%</div>
        </div>
        {url &&<img src={url}/>}
        </>
    )
}

export default ProgressBar