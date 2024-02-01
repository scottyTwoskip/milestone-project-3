import React, { useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import './Home.css'; // Ensure this path is correct based on your project structure

// Import images
import redBlackImage from "../assets/red_black.jpg";
import medballImage from "../assets/medball.jpg";
import ropesImage from "../assets/ropes.jpg";
import barbellImage from "../assets/barbell.jpg";

function Home() {
  const [show, setShow] = useState(false); // For modal visibility
  const [currentImage, setCurrentImage] = useState(''); // For the currently displayed image in the modal

  // Functions to handle opening and closing of the modal
  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  return (
    <Container className="align-items-center justify-content-center">
      {/* Section 1 */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={redBlackImage} alt="Red rubber floor with black weights image by Alora Griffiths on Unsplash" rounded fluid onClick={() => handleShow(redBlackImage)} />
          <h2>FF</h2>
          <p>yeah</p>
        </Col>
      </Row>

      {/* Section 2 */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={medballImage} alt="Medicine ball and weight on block image by Ryan De Hamer on Unsplash" rounded fluid onClick={() => handleShow(medballImage)} />
          <h2>Ad 2</h2>
          <p>TEXT GOES HERE</p>
        </Col>
      </Row>

      {/* Section 3 */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={ropesImage} alt="Rope workout image by Meghan Holmes on Unsplash" rounded fluid onClick={() => handleShow(ropesImage)} />
          <h2>Ad 3</h2>
          <p>TEXT GOES HERE</p>
        </Col>
      </Row>

      {/* Section 4 */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={barbellImage} alt="Barbell on ground image by Victor Freitas on Unsplash" rounded fluid onClick={() => handleShow(barbellImage)} />
          <h2>Ad 4</h2>
          <p>TEXT GOES HERE</p>
        </Col>
      </Row>

      {/* Modal for displaying the clicked image */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body>
          <Image src={currentImage} alt="Enlarged view" fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Home;








