import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/weights_on_floor.jpg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

function AboutPage() {
  return (
    <div className="container mt-5 bg-dark text-white p-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Welcome to our fitness application! We are dedicated to helping you
            track and improve your workouts. Whether you're a beginner or an
            experienced fitness enthusiast, our app provides a simple and
            effective way to log your exercises and monitor your progress.
          </p>
          <p>
            Our mission is to make your fitness journey enjoyable and
            productive. Feel free to explore the features of our app and start
            achieving your fitness goals today!
          </p>
        </div>
      </div>
      <div className="container mt-5 text-light" style={backgroundStyle}>
        <img
          src={backgroundImage}
          alt="Bumper plate on floor image by Victor Freitas on Unsplash"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        />
      </div>  
    </div>
  );
}

export default AboutPage;

