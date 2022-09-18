import Ethereum2 from "../src/images/icon-star.svg";
import Heading from "./components/Heading";
import Rating from "./components/Rating";

import Submit from "./components/Submit";
import Submit2 from "./components/Submit2";
import Paragraphe from "./components/Paragraphe";
import Button from "./components/Button";

import Test from "./components/Test";


function App() {
  
  return (
    
   <div className="Container"><button><img src={Ethereum2} alt="this is ethetreum logo" className="Star" /></button>
   <Heading/>
   <Test/>
   <Paragraphe/>
   <Rating/>
   <Submit/>
  
  
   
   </div> 
   
  )
  
}

export default App;
