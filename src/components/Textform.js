import React, {useState} from 'react'
import Navbar from './Navbar';


export default function Textform(props) {
  const [Mode,setMode] =useState("lite");

     const handleUpClick = ()=>{
      //  console.log("Uppercase was clicked" +text);
       let newText =text.toUpperCase();
       setText(newText);
     }
     const handleapClick = ()=>{
      //  console.log("Lowercase was clicked" +text);
      setMode({
       color: 'white',
       backgroundColor: 'black'
 
     });
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

     const toggle=()=>{
       if(Mode.color ==='white')
       setMode({
         color: 'white',
         backgroundColor: 'black'

       });
       else{
          setMode({
         color: 'white',
         backgroundColor: 'black'

       });
       }

     }
     const handleOnChange =(event)=>{
       console.log("on change");
       setText(event.target.value);
     }
       const [text,setText] = useState("Enter text here");
  // setText("hello")

  return (
    <>
    <h1 style={props.Mode}>{props.heading}</h1>
    <div style={props.Mode}>
 <div className=" mb-3"  style={props.Mode}>
 {/* <label for="myBox" className='form-label'>TextTool</label> */}
 <textarea className='form-control' style={props.Mode} value={text} onChange={handleOnChange} id="myBox" rows="9" >{text}</textarea>
</div>
 <button className="btn btn-primary mx-1"   onClick={handleUpClick}>Convert to upper case</button>
 <button className="btn btn-primary mx-1" onClick={handleapClick}>Convert to lower case</button>
 <button className="btn btn-primary mx-1" onClick={removeCom}> Remove comment</button>
</div>

<h1 style={props.Mode}>Text Summary </h1>
<p style={props.Mode}>{text.split(" ").length} words {text.length} characters</p>
<p style={props.Mode}>{0.009 * text.split(" ").length} Minutes read</p>
<h2 style={props.Mode} >Preview </h2>
<p style={props.Mode}>{text}</p>


</>
  );
}
