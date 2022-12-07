import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddReport from './Components/AddReport';
import Footer from './Components/Footer';
import ListReports from './Components/ListReports';
import Navbar from './Components/Navbar';
import Heropg from './Components/Heropg'

function App() {
  return (
     <div>
     <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route index element={<Heropg/>}/>
            <Route path='/list'element={<ListReports/>}/>
            <Route path='/addreport'element={<AddReport/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
