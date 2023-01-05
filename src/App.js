import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddReport from './Components/AddReport';
import Footer from './Components/Footer';
import ListReports from './Components/ListReports';
import Navbar from './Components/Navbar';
import Heropg from './Components/Heropg'
import Login from './Components/Login';
import BasicToast from './Components/BasicToast';
import UserLogin from './Components/UserLogin';

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
            <Route path='/about' element={<BasicToast/>}/>
            <Route path='/user' element={<UserLogin/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
