import React from "react";
import { Card, Col } from "react-bootstrap";

class LatestRelease extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-wrap p-5">
          {this.props.books.map((book) => (
            <Col xs={3} className="book-cover">
              <Card style={{ width: "260px", height: "400px" }}>
                <Card.Img
                  src={book.img}
                  style={{
                    width: "200px",
                    height: "250px",
                    marginLeft: "30px",
                    marginTop: "30px",
                  }}
                />
                <Card.Body>{book.title}</Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </>
    );
  }
}

export default LatestRelease;
