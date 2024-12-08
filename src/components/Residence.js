import React from "react";
import Residence1 from "../assets/residence-03.png";
import Residence2 from "../assets/residence-04.png";
import Residence3 from "../assets/residence-05.png";

const Residence = () => {
  const images = [Residence1, Residence2, Residence3];

  return (
    <div style={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Residence ${index + 1}`}
          style={styles.image}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "1920px",
    height: "1080px",
    objectFit: "cover",
  },
};

export default Residence;
