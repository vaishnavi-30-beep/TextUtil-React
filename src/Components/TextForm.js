import React,{useState} from "react";

export default function TextForm(props) {

    const [text, setText] = useState("")
    const handleUpperClick = ()=> {
        
        console.log("In Handle upper click ")
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleOnChange = (event) =>{

        console.log("In handle change")
        console.log(props.mode);
        setText(event.target.value)
    }
    const handleLowerClick = ()=>{
      setText(text.toLowerCase())
      props.showAlert("Converted to Lower Case", "success")

    }
    const handleClear = ()=>{
      setText("")
      props.showAlert("Text cleared", "success")

    }
    const handleAlternateClick = ()=>{
    
      let newText = ""
      for (let i = 0, j = 1; i < text.length-1, j < text.length;i+=2,j+=2){
        
        newText += text[i].toUpperCase() + text[j].toLowerCase()
       
      }
      setText(newText)
      props.showAlert("Converted to alternate case", "success")

    }
//     const noOfWords = (str)=>{

//       for(let i = 0; i < str.length(); i++){
//         if(str[i] == ' ')
//           str
//       }
//     }
  
    console.log('MODE ::: ',props.mode)
    
  return (
    props.bg && <div>
    <div className="container mt-5" style={{color: props.mode==='light'?'#0e2039':'white'}}>
      <div className="mb-3">
          <h1 >Enter text to analyse </h1>
     
    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.bg.backgroundColor, color: props.bg.color}} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>

      </div>
      <button className={`btn btn-${props.bg.backgroundColor} mx-2`}  onClick={handleUpperClick}  style={{backgroundColor: props.bg.backgroundColor, color: props.mode==='light'?'#0e2039':'white'}}>Convert To Uppercase</button>
      <button className={`btn btn-${props.bg.backgroundColor}`} onClick={handleLowerClick} style={{backgroundColor: props.bg.backgroundColor,color: props.mode==='light'?'#0e2039':'white'}}>Convert To Lowercase</button>
      <button className={`btn btn-${props.bg.backgroundColor} mx-2`} onClick={handleClear} style={{backgroundColor: props.bg.backgroundColor, color: props.mode==='light'?'#0e2039':'white'}}>Clear Text</button>
      <button className={`btn btn-${props.bg.backgroundColor}`} onClick={handleAlternateClick} style={{backgroundColor: props.bg.backgroundColor, color: props.mode==='light'?'#0e2039':'white'}}>Convert To alternate upper & lower case</button>
       

    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'#0e2039':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <p>Number Of Sentences : {text.split(".").length-1+text.split("!").length-1+text.split("?").length-1}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter text to preview'}</p>
    </div>
    </div>
  );
}
