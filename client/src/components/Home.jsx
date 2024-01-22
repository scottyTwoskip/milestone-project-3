import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="align-items-center justify-content-center">
      {/* Section 1 */}
      <div className="my-4 text-center">
        <img
          src="path_to_image"
          alt="Image 1"
          className="img-fluid"
        />
        <h2>Ad 1</h2>
        <p>Images or stuff can go here</p>
      </div>

      {/* Section 2 */}
      <div className="my-4 text-center">
        <img
          src="path_to_image"
          alt="Image 2"
          className="img-fluid"
        />
        <h2>Ad 2</h2>
        <p>Images or stuff can go here</p>
      </div>

      {/* Section 3 */}
      <div className="my-4 text-center">
        <img
          src="path_to_image"
          alt="Image 3"
          className="img-fluid"
        />
        <h2>Ad 3</h2>
        <p>Images or stuff can go here</p>
      </div>

      {/* Section 4 */}
      <div className="my-4 text-center">
        <img
          src="path_to_image"
          alt="Image 4"
          className="img-fluid"
        />
        <h2>Ad 4</h2>
        <p>Images or stuff can go here</p>
      </div>
    </Container>
  );
}

export default Home;