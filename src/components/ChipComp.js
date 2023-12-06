const ChipComp = ({text, onClick}) =>{
    return <>
        <span 
            class="px-4 mx-1 py-2 rounded-full text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:bg-gray-300 transition duration-300 ease active:bg-white"
            onClick={onClick}
        >
            {text}
        </span>
    </>
}

export default ChipComp;