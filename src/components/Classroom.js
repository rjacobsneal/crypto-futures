import React, { useState } from "react";
import { Link } from "react-router-dom";
import Classroom1 from "../assets/classroom-12.png";
import Classroom2 from "../assets/classroom-11.png";

const Classroom = () => {
  const images = [Classroom1, Classroom2];
  const texts = [
    {
      content: `>> Formerly filled with shelves of computers, warehouses are now redesigned for human use. These spaces house classrooms that expand on the existing ASIC training centers, teaching basic IT skills while offering advanced coding and technical expertise. This transformation empowers students to pursue specialized roles and launch their own projects.`,
      links: [], // No links for the first image
    },
    {
      content: `>> The integration of classroom spaces fosters a dynamic learning environment that bridges technical training with academic inquiry. These classrooms act as hubs for innovation, connecting the site's industrial past with its educational future.`,
      links: ["/site", "/residence"], // Links for the second image
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
          <img src={image} alt={`Classroom ${index + 1}`} className="image" />
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
                        {`>> ${link === "/site" ? "Site" : "Residence"}`}
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

export default Classroom;
