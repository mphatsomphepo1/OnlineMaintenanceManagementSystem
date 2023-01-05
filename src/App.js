import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddReport from './Components/AddReport';
import Footer from './Components/Footer';
import ListReports from './Components/ListReports';
import Navbar from './Components/Navbar';
import Heropg from './Components/Heropg'
import Login from './Components/Login';
import UserLogin from './Components/UserLogin';
import About from './Components/About';
function App() {
  return (
     <div>
     <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route index element={<Heropg/>}/>
            <Route path='/list'element={<ListReports/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addreport'element={<AddReport/>}/>
            <Route path='/user' element={<UserLogin/>}/>
            <Route path='/about' element={<About/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
