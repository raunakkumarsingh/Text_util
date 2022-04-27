import React, {useState} from 'react'


export default function Textform(props) {

     const handleUpClick = ()=>{
      //  console.log("Uppercase was clicked" +text);
       let newText =text.toUpperCase();
       setText(newText);
     }
     const handleapClick = ()=>{
      //  console.log("Lowercase was clicked" +text);
       let newText =text.toLowerCase();
       setText(newText);
     }
     const removeCom =()=>{
      //  console.log("removed");
      //  alphabet.replace(/H.*S/, 'HS')
      // .replace("(?s)<!--\\[if(.*?)\\[endif\\] *-->", "")
       console.log(text.match("/ /*(.*?)*/ /i"));
      //  let newText=text.toLowerCase();
       setText();
     }
     const handleOnChange =(event)=>{
       console.log("on change");
       setText(event.target.value);
     }
       const [text,setText] = useState("Enter text here");
  // setText("hello")

  return (
    <>
    <h1>{props.heading}</h1>
    <div>
 <div className=" mb-3">
 {/* <label for="myBox" className='form-label'>TextTool</label> */}
 <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="9" >{text}</textarea>
</div>
 <button className="btn btn-primary mx-1"   onClick={handleUpClick}>Convert to upper case</button>
 <button className="btn btn-primary mx-1" onClick={handleapClick}>Convert to lower case</button>
 <button className="btn btn-primary mx-1" onClick={removeCom}> Remove comment</button>
</div>

<h1>Text Summary </h1>
<p>{text.split(" ").length} words {text.length} characters</p>
<p>{0.009 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>


</>
  );
}
