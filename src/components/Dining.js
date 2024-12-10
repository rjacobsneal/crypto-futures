import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dining1 from "../assets/dining-06.png";
import Dining2 from "../assets/dining-07.png";

const Dining = () => {
  const [largeBoxClicked, setLargeBoxClicked] = useState([false, false]);
  const [isHovered, setIsHovered] = useState(false);

  const texts = [
    {
      content: `>> The cafeteria is transformed into a vibrant recreational space where students and staff can socialize, watch TV, study, or participate in interest groups. This encourages collaboration and builds a strong sense of community.`,
      links: [],
    },
    {
      content: `>> Situated slightly outside the town, the site includes essential on-site food options. Small-scale agricultural production supplements the cafeteria's offerings, ensuring a sustainable food supply for students and staff.`,
      links: ["/site", "/recycling"],
    },
  ];

  const handleLargeBoxClick = (index) => {
    setLargeBoxClicked((prev) =>
      prev.map((clicked, i) => (i === index ? true : clicked))
    );
  };

  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={Dining1} alt="Dining 06" className="image" />
        {!largeBoxClicked[0] && (
          <div
            className="black-box"
            onClick={() => handleLargeBoxClick(0)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          ></div>
        )}
        {largeBoxClicked[0] && (
          <div className="text-overlay">
            <p>{texts[0].content}</p>
          </div>
        )}
      </div>

      <div className="image-wrapper">
        <img src={Dining2} alt="Dining 07" className="image" />
        {!largeBoxClicked[1] && (
          <div
            className="black-box"
            onClick={() => handleLargeBoxClick(1)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          ></div>
        )}
        {largeBoxClicked[1] && (
          <div className="text-overlay">
            <p>{texts[1].content}</p>
            {texts[1].links.length > 0 && (
              <div style={{ marginTop: "10px", lineHeight: "1.25" }}>
                {texts[1].links.map((link, linkIndex) => (
                  <div key={linkIndex} style={{ marginBottom: "5px" }}>
                    <Link
                      to={link}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {`>> ${link === "/site" ? "Site" : "Heat Recycling"}`}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <Link
          to="/recycling"
          className="overlay"
          style={{
            backgroundColor:
              largeBoxClicked[1] && isHovered
                ? "rgba(0, 0, 0, 0)"
                : "rgba(0, 0, 0, 1)",
            pointerEvents: largeBoxClicked[1] ? "auto" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

export default Dining;
