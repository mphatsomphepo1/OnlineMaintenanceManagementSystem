import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddReport from './Components/AddReport';
import Footer from './Components/Footer';
import ListReports from './Components/ListReports';
import Navbar from './Components/Navbar';
import Heropg from './Components/Heropg'
import Login from './Components/Login';
import BasicToast from './Components/BasicToast';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
     <div>
     <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route index element={<Heropg/>}/>
            <Route path='/' element={<ListReports/>}/>
            <Route path='/list'element={<ListReports/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/addreport'element={<AddReport/>}/>
            <Route path='/about' element={<BasicToast/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
