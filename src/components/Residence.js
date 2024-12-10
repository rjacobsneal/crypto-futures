import React, { useState } from "react";
import { Link } from "react-router-dom";
import Residence1 from "../assets/residence-03.png";
import Residence2 from "../assets/residence-04.png";
import Residence3 from "../assets/residence-05.png";

const Residence = () => {
  const images = [Residence1, Residence2, Residence3];
  const texts = [
    {
      content: `>> Former worker barracks are converted into dormitories for students, prioritizing scholarships for non-local students from underserved rural areas of Kazakhstan. This ensures that education opportunities are accessible to those with limited resources.`,
      links: [],
    },
    {
      content: `>> The site provides shared living facilities, including bathrooms and common areas, designed to create a sense of community among students. These facilities support a holistic educational experience.`,
      links: [],
    },
    {
      content: `>> Historically dominated by young male workers, the dormitories are now inclusive spaces. Gender-separated accommodations are available, with active efforts to promote women’s involvement in computer science and higher education, fostering diversity in technology fields.`,
      links: ["/site", "/dining"],
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
          <img src={image} alt={`Residence ${index + 1}`} className="image" />
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

export default Residence;
