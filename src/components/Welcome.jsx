import { Row, Container, Jumbotron, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <>
      {/* <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron> */}

      <Container>
        <Row>
          <Col>
            {" "}
            <h1>Strive Books</h1>
            <p>Welcome !!!! </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
