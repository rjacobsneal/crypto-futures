import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Energy1 from "../assets/energy.png";

const Energy = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  const handleBoxClick = () => {
    setIsBoxVisible(false);
  };

  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={Energy1} alt="Energy" className="image" />
        {isBoxVisible && (
          <div
            className="black-box"
            onClick={handleBoxClick}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          ></div>
        )}
        {!isBoxVisible && (
          <div className="text-overlay">
            <p>
              {`>> The majority of the site's energy still comes from a nearby coal power plant. However, solar panels have been installed to supplement energy usage. While the Kazakh uplands experience seasonal variations in solar radiation and snow cover, summer months provide an opportunity to leverage the vast landscape for renewable energy. These measures aim to reduce reliance on coal and demonstrate a transition toward sustainability.`}
            </p>
            <div style={{ marginTop: "10px", lineHeight: "1.25" }}>
              <div style={{ marginBottom: "5px" }}>
                <Link
                  to="/site"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {`>> Site`}
                </Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <Link
                  to="/computing"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {`>> Computing`}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Energy;
