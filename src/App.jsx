import './App.scss';
import Topbar from"./components/Topbar/topbar";
import Home from "./components/home/Home";
import User from "./components/User/User";
import Seller from "./components/Seller/Seller";
import Landingpage from './components/landingpage/Landingpage';

function App() {
  return (
    <div className="App">
      
      <Topbar/>

      <div className = "sections">

      <Landingpage/>
       <Home/>
       <User/>
       <Seller/>

       </div>
        
     
    </div>
  );
}

export default App;
