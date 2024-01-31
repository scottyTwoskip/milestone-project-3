import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="align-items-center justify-content-center">
      {/* Section 1 */}
      <div className="my-4 text-center">
        <img
          src="../assets/red_black.jpg"
          alt="Red rubber floor with black weights image by Alora Griffiths on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 1</h2>
        <p>TEXT GOES HERE</p>
      </div>

      {/* Section 2 */}
      <div className="my-4 text-center">
        <img
          src="../assets/medball.jpg"
          alt="Medicine ball and weight on block image by Ryan De Hamer on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 2</h2>
        <p>TEXT GOES HERE</p>
      </div>

      {/* Section 3 */}
      <div className="my-4 text-center">
        <img
          src="../assets/ropes.jpg"
          alt="Rope workout image by Meghan Holmes on Unsplash"
          className="img-fluid"
        />
        <h2>Ad 3</h2>
        <p>TEXT GOES HERE</p>
      </div>

      {/* Section 4 */}
      <div className="my-4 text-center">
        <img
          src="../assets/barbell.jpg"
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