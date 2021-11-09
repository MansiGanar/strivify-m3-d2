import { Container, Jumbotron } from "react-bootstrap";

const Welcome = () => {
  return (
    <>
      <Jumbotron fluid className="jumbotronn mb-0">
        <Container>
          <h1>Welcome !!! </h1>
          <p>To the book store</p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Welcome;
