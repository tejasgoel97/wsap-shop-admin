const InputField = (props) => {
    let { className, title,value, error, required, onChange, disabled } = props;
    console.log(error)
    if (!className) {
      className = "";
    }
    if(!onChange) onChange = ()=> null
  
    return (
      <div className={className}>
        {title && <label
          for="error"
          className={`block mb-1 text-sm font-medium ${error?"text-red-700":"text-gray-600"}`}
        >
          {title}{required? "*":""}
        </label>}
        <input
          type="text"
          id="error"
          className={`block w-full p-2.5 py-1.5 text rounded ${error? "bg-red-50 border border-red-500 text-red-600 placeholder-red-600  focus:ring-red focus:border-red-500 " : "bg-gray-50 border border-gray-500 text-gray-600 placeholder-gray-400  focus:ring-gray-300 focus:border-gray-400 foc"} ${disabled? "bg-slate-300":""}`}
          placeholder={title}
          value={value}
          onChange={(e)=> onChange(e.target.value)}
          disabled={disabled}
          
        />
        {!error && <p className=" text-sm hidden">
          {'error'}
        </p>}
        <p className=" text-sm text-red-600  ml-2">
          {error}
        </p>
      </div>
    );
  };
  
  export default InputField;
  