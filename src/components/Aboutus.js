import React,{useState} from 'react'


export default function Aboutus(props) {
  const [mode,setMode]=useState({
    color: 'white',
    backgroundColor: 'black'

  });

   const [text,setText]=useState("light");

  const toggleMode=()=>{
    if(mode.color === 'white'){
    setMode({
      color: 'black',
      backgroundColor: 'white',
      border: '3px solid white',
      body: 'grey'
    });
    setText("Dark");
}
else{
    setMode({
        color: 'white',
        backgroundColor: 'black'
    });
    setText("Light");
}
  }
 
 
 return (
<>
    <h1 className='my-3'>About Us</h1>

    <div className="accordion" id="accordionExample" style={mode}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" style={mode} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mode}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mode}>
      <h2 className="accordion-header" id="headingTwo" style={mode}>
        <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" style={mode} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mode}>
      <h2 className="accordion-header" id="headingThree" style={mode}>
        <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
  <div>
        <button className='btn btn-primary my-3' onClick={toggleMode}>Enable {text } Mode</button>
  </div>
  </>
  
  );
}
