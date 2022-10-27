import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
import Footer from './Components/Footer';
import NavbarComp from './Components/NavbarComp'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
       <NavbarComp/>
          <Container>
            <Row>
            <Col lg={12} className={"margin-top"}>
              {/* <Header/> */}
              
            </Col>
            </Row>
          </Container>
         <Footer/>
    </div>
  );
}

export default App;
