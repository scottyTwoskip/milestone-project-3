import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import './Home.css';
import workoutPlanImage from "../assets/workoutPlan.jpeg";

// Import images
import redBlackImage from "../assets/red_black.jpg";
import medballImage from "../assets/medball.jpg";
import ropesImage from "../assets/ropes.jpg";
import barbellImage from "../assets/barbell.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showWelcomeImage, setShowWelcomeImage] = useState(true);
  const [currentImage, setCurrentImage] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseWelcomeImage = () => setShowWelcomeImage(false);

  return (
    <Container className="align-items-center justify-content-center">
      {showWelcomeImage && (
        <div className="welcome-image-container">
          <Image src={workoutPlanImage} alt="Workout Plan" fluid />
          <Button variant="dark" className="close-welcome-image" onClick={handleCloseWelcomeImage}>×</Button>
        </div>
      )}

      {/* Personalized Workout Plans */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={redBlackImage} alt="Red rubber floor with black weights" rounded fluid onClick={() => handleShowModal(redBlackImage)} />
          <h2>Personalized Workout Plans</h2>
          <p>Get tailored workout plans designed to fit your specific fitness goals, with adjustable difficulty levels to match your pace.</p>
        </Col>
      </Row>

      {/* Nutrition Tracking */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={medballImage} alt="Medicine ball and weight" rounded fluid onClick={() => handleShowModal(medballImage)} />
          <h2>Nutrition Tracking</h2>
          <p>Monitor your diet with our comprehensive nutrition tracker and receive customized meal suggestions to complement your workouts.</p>
        </Col>
      </Row>

      {/* Activity Monitoring */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={ropesImage} alt="Rope workout" rounded fluid onClick={() => handleShowModal(ropesImage)} />
          <h2>Activity Monitoring</h2>
          <p>Track your daily activities, steps, and calorie burn to stay informed and motivated. Sync with wearable devices for real-time updates.</p>
        </Col>
      </Row>

      {/* Community and Challenges */}
      <Row className="my-4 justify-content-md-center image-container">
        <Col xs={12} md={6} lg={4} className="text-center">
          <Image src={barbellImage} alt="Barbell on ground" rounded fluid onClick={() => handleShowModal(barbellImage)} />
          <h2>Community and Challenges</h2>
          <p>Join our fitness community to connect with fellow enthusiasts. Participate in challenges to push your limits and achieve new milestones.</p>
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















