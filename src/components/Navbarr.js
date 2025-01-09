import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

function Navbarr({ settext, movies, setmovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name: "",
    posterurl: "",
    date: "",
    rating: "",
  });
  const handleadd = () => {
    setmovies( [...movies, newmovie] );
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "#e50914" }}>
            MarvelVerse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Movies</Nav.Link>
              <Nav.Link href="#action2">Series</Nav.Link>
              <Nav.Link href="#action2">Popular</Nav.Link>
              <Nav.Link href="#action2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-1"
                  style={{ width: "18%" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                UpComming
              </Nav.Link>
              <Button
                variant="danger"
                style={{ marginRight: "20px" }}
                onClick={handleShow}
              >
                +
              </Button>
            </Nav>
            <Form className="d-flex" style={{ alignItems: "center" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="search"
                aria-label="Search"
                onChange={(e) => settext(e.target.value)}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Movie Name"
            className="me-2"
            required
            onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}
          />
          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Movie URL"
            className="me-2"
            required
            onChange={(e) =>
              setnewmovie({ ...newmovie, posterurl: e.target.value })
            }
          />
          <Form.Label>Movie Date</Form.Label>
          <Form.Control
            type="number"
            placeholder="Movie Date"
            className="me-2"
            required
            max={2025}
            min={1800}
            onChange={(e) => setnewmovie({ ...newmovie, date: e.target.value })}
          />
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Movie Rating"
            className="me-2"
            required
            max={5}
            min={0}
            onChange={(e) =>
              setnewmovie({ ...newmovie, rating: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
                handleadd();
              handleClose();
            }}
          >
            Add Movie
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
  console.log(movies);
}

export default Navbarr;
