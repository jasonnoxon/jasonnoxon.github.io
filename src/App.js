import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";


import './App.css';
import jason from "./Images/jason_noxon_round.png"
import MailChimp from "./MailChimp";

function App() {
  return (
    <Container>
      <Row style={{ marginTop: "70px" }}>

        <Col>
          <Image className="center" style={{ border: "0" }} src={jason} />
        </Col>

      </Row>
      <Row><h1 className="header text-center">Jason Noxon</h1></Row>
      <Row style={{ marginTop: "70px" }}>
        <Col>&nbsp;</Col>
        <Col sm={6}>
          <p>
            <strong><span style={{ fontSize: "bigger" }}>Listen</span></strong>...anyone can create a website with lots of flashy colors, animations, and images to tantilize and inspire. It takes a real <strong>genius</strong> to
            create something stark and beautifully clean like the website you're looking at now. It also takes a real wack-job to try and and convince you that
            any of the above statement is true.
          </p>

          <p>
            Regardless, my album entitled <strong><i>Dwell</i></strong> will be released on <strong>January 15, 2023</strong>. I would <i>really</i> like to keep you up to date
            with what is happening with it. So if you wouldn't mind typing your first name and email address into the boxes provided below, I can do that in earnest.
          </p>
          <p>
            This is an adventure for which I would be greatful to have you along.
          </p>
        </Col>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
        <Col md={6} sm={12}>
          <MailChimp />
        </Col>
        <Col>&nbsp;</Col>
      </Row>
    </Container >

  );
}

export default App;
