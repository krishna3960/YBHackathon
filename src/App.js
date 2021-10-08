import './App.css';
import Topbar from"./components/Topbar/topbar";
import Home from "./components/home/Home";
import User from "./components/User/User";
import Seller from "./components/Seller/Seller";


function App() {
  return (
    <div className="App">
      
       <Topbar/>
       <Home/>
       <User/>
       <Seller/>
        
     
    </div>
  );
}

export default App;
