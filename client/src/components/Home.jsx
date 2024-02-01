import React from "react";
import { Container } from "react-bootstrap";
// Import images
import redBlackImage from "../assets/red_black.jpg";
import medballImage from "../assets/medball.jpg";
import ropesImage from "../assets/ropes.jpg";
import barbellImage from "../assets/barbell.jpg";




function Home() {
  return (
    <Container className="align-items-center justify-content-center">
      {/* Section 1 */}
      <div className="my-4 text-center">
        <img
          src={redBlackImage}
          alt="Red rubber floor with black weights image by Alora Griffiths on Unsplash"
          className="img-fluid"
        />
        <h2>FF</h2>
        <p>yeah</p>
      </div>

      {/* Section 2 */}
      <div className="my-4 text-center">
        <img
          src={medballImage}
          alt="Medicine ball and weight on block image by Ryan De Hamer on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 2</h2>
        <p>TEXT GOES HERE</p>
      </div>

      {/* Section 3 */}
      <div className="my-4 text-center">
        <img
          src={ropesImage}
          alt="Rope workout image by Meghan Holmes on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 3</h2>
        <p>TEXT GOES HERE</p>
      </div>

      {/* Section 4 */}
      <div className="my-4 text-center">
        <img
          src={barbellImage}
          alt="Barbell on ground image by Victor Freitas on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 4</h2>
        <p>TEXT GOES HERE</p>
      </div>
    </Container>


  );
}



export default Home;



