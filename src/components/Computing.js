import React, { useState } from "react";
import { Link } from "react-router-dom";
import Computing1 from "../assets/computing-13.png";
import Computing2 from "../assets/computing-09.png";

const Computing = () => {
  const images = [Computing1, Computing2];
  const texts = [
    {
      content: `>> The site's primary purpose remains focused on computation, acknowledging its significant energy footprint. However, this computation is repurposed to serve community-driven and sustainable goals rather than profit motives. By addressing local needs, the site integrates computation as a tool to advance sustainability and education.`,
      links: [],
    },
    {
      content: `>> Civic data platforms and real-time modeling systems illustrate how computation can optimize public services like energy distribution, making "smart cities" a reality. The site also collaborates with Kazakh universities to handle their research computational needs at lower costs, fostering stronger ties with the nation's academic sector while inspiring educational programs and research opportunities.`,
      links: ["/site", "/classroom"],
    },
  ];

  const [visibleBoxes, setVisibleBoxes] = useState(images.map(() => true));

  const handleBoxClick = (index) => {
    setVisibleBoxes((prevState) =>
      prevState.map((visible, i) => (i === index ? false : visible))
    );
  };

  return (
    <div className="container">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image} alt={`Computing ${index + 1}`} className="image" />
          {visibleBoxes[index] && (
            <div
              className="black-box"
              onClick={() => handleBoxClick(index)}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            ></div>
          )}
          {!visibleBoxes[index] && (
            <div className="text-overlay">
              <p>{texts[index].content}</p>
              <div style={{ marginTop: "10px", lineHeight: "1.25" }}>
                {texts[index].links.map((link, linkIndex) => (
                  <div key={linkIndex} style={{ marginBottom: "5px" }}>
                    <Link
                      to={link}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {`>> ${link === "/site" ? "Site" : "Classroom"}`}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Computing;
