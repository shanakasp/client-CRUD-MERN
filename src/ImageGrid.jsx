import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import image2 from "./Assets/Shoulder.jpg";
import image3 from "./Assets/back.jpeg";
import image4 from "./Assets/ear.jpeg";
import image1 from "./Assets/head.jpg";
import image5 from "./Assets/joint.jpeg";
import image6 from "./Assets/knee.jpeg";
import image7 from "./Assets/neck.jpeg";
const pains = [
  {
    id: 1,
    name: "Headache",
    imageUrl: image1,
  },
  { id: 2, name: "Shoulder Pain", imageUrl: image2 },
  { id: 3, name: "Back Pain", imageUrl: image3 },
  { id: 4, name: "Earache", imageUrl: image4 },
  { id: 5, name: "Joint Pain", imageUrl: image5 },
  { id: 6, name: "Knee Pain", imageUrl: image6 },
  { id: 7, name: "Neck Pain", imageUrl: image7 },
];

function ImageGrid() {
  return (
    <div>
      <h1>Home</h1>
      <div className="container mt-3">
        <div className="row">
          {pains.map((pain) => (
            <div key={pain.id} className="col-md-3 mb-3">
              <Link to={`/pain/${pain.id}`}>
                <div className="position-relative image-container">
                  <img
                    src={pain.imageUrl}
                    alt={`${pain.name} Image`}
                    className="img-fluid custom-image"
                  />
                  <div className="caption-overlay">{pain.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
