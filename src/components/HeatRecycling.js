import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeatRecycling1 from "../assets/heat-recycling-10.png";
import HeatRecycling2 from "../assets/heat-recycling-14.png";

const HeatRecycling = () => {
  const images = [HeatRecycling1, HeatRecycling2];
  const texts = [
    {
      content: `>> Mass computation generates significant heat. Instead of wasting this energy, the site repurposes it to warm indoor spaces like classrooms and support small-scale agricultural production. This innovation addresses the challenges of growing crops in a cold climate while reducing energy waste.`,
      links: [], // No links for Pic 1
    },
    {
      content: `>> During its previous operation, Enegix successfully tested this approach by growing radishes using heat generated from computations. The crops were proven safe for consumption, showcasing the feasibility of integrating agriculture with computational energy reuse.`,
      links: ["/site", "/dining"], // Links for Pic 2
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
          <img
            src={image}
            alt={`Heat Recycling ${index + 1}`}
            className="image"
          />
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
              {texts[index].links.length > 0 && (
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
                        {`>> ${link === "/site" ? "Site" : "Dining"}`}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeatRecycling;
