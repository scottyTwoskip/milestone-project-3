import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import './Home.css'; // Ensure this path is correct based on your project structure
import workoutPlanImage from "../assets/workoutPlan.jpeg"; // Update this path to the actual path of your image

// Import images
import redBlackImage from "../assets/red_black.jpg";
import medballImage from "../assets/medball.jpg";
import ropesImage from "../assets/ropes.jpg";
import barbellImage from "../assets/barbell.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false); // For modal visibility
  const [showWelcomeImage, setShowWelcomeImage] = useState(true); // For welcome image visibility
  const [currentImage, setCurrentImage] = useState(''); // For the currently displayed image in the modal

  // Functions to handle opening and closing of the modal
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  // Function to close the welcome image
  const handleCloseWelcomeImage = () => setShowWelcomeImage(false);

  return (
    <Container className="align-items-center justify-content-center">
      {/* Welcome Image and Header */}
      {showWelcomeImage && (
        <div className="welcome-image-container">
          <Image src={workoutPlanImage} alt="Workout Plan" fluid />
          <Button variant="dark" className="close-welcome-image" onClick={handleCloseWelcomeImage}>×</Button>
        </div>
      )}

      {/* Sections for other images */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={redBlackImage} alt="Red rubber floor with black weights" rounded fluid onClick={() => handleShowModal(redBlackImage)} />
          <h2>Ad 1</h2>
          <p>Description for Ad 1</p>
        </Col>
      </Row>

      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={medballImage} alt="Medicine ball and weight" rounded fluid onClick={() => handleShowModal(medballImage)} />
          <h2>Ad 2</h2>
          <p>Description for Ad 2</p>
        </Col>
      </Row>

      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={ropesImage} alt="Rope workout" rounded fluid onClick={() => handleShowModal(ropesImage)} />
          <h2>Ad 3</h2>
          <p>Description for Ad 3</p>
        </Col>
      </Row>

      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={barbellImage} alt="Barbell on ground" rounded fluid onClick={() => handleShowModal(barbellImage)} />
          <h2>Ad 4</h2>
          <p>Description for Ad 4</p>
        </Col>
      </Row>

      {/* Modal for displaying the clicked image */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body>
          <Image src={currentImage} alt="Enlarged view" fluid className="modal-image" />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Home;














