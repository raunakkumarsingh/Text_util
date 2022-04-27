import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

// const raun = 'Josh Perez';

 {/* const element = <h1>Hello, {raun}</h1>; */}
function App() {
  return (
        <>
 <Navbar title="Text"/>
 <div className="container my-4">
 <Textform heading="Enter the Text to analyze"/>
 </div>
 </>

    
  );
}

export default App;
