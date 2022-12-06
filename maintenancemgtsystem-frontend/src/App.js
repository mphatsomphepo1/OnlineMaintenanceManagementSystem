// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import NavbarComp from './Components/NavbarComp'
// import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// import ListReports from './Components/AddReport'
import AddReport from './Components/AddReport';
import Footer from './Components/Footer';
import ListReports from './Components/ListReports';
import Navbar from './Components/Navbar';
import Heropg from './Components/Heropg'

function App() {
  return (
    // <div>
    //    <NavbarComp/>
    //       <Container>
    //         <Row>
    //         <Col lg={12} className={"margin-top"}>
    //           {/* <Header/> */}
              
    //         </Col>
    //         </Row>
    //       </Container>
    //      <Footer/>
    // </div>
     <div>
     <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route index element={<Heropg/>}/>
            <Route path='/list'element={<ListReports/>}/>
            {/* <Route path='/list' element={<Heropg/>} /> */}
            <Route path='/addreport'element={<AddReport/>}/>
         </Routes>
         <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
