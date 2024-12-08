import React, { useState } from "react";
import Dining1 from "../assets/dining-06.png";
import Dining2 from "../assets/dining-07.png";

const Dining = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <img src={Dining1} alt="Dining 06" style={styles.image} />
      <div style={styles.imageWrapper}>
        <img src={Dining2} alt="Dining 07" style={styles.image} />
        <a
          href="/heat-recycling"
          style={{
            ...styles.overlay,
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0)"
              : "rgba(0, 0, 0, 1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Learn more about heat recycling"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Change to "row" for horizontal layout
    alignItems: "center",
    gap: "20px", // Add space between images
  },
  image: {
    width: "1920px",
    height: "1080px",
    objectFit: "cover", // Ensures the image fills the container without distortion
  },
  imageWrapper: {
    position: "relative",
    width: "1920px",
    height: "1080px",
  },
  overlay: {
    position: "absolute",
    top: "745px",
    left: "1097px",
    width: "745px",
    height: "275px",
    backgroundColor: "rgba(0, 0, 0, 1)", // Default black box
    transition: "background-color 0.3s ease", // Smooth fade effect
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
  },
};

export default Dining;
