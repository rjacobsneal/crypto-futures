import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 1920px;
  height: 1080px;
  object-fit: cover;
`;

const Box = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 270px;
  height: 270px;
  background-color: ${({ isVisible, isHovered }) =>
    isHovered || isVisible ? "transparent" : "black"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const TextBox = styled.div`
  position: absolute;
  top: ${({ top }) => top + (271 + 43)}px; /* Place directly below the box */
  left: ${({ left }) => left}px;
  width: 271px;
  height: 271px;
  padding: 10px;
  background-color: #ffffff;
  border: 2px solid #000000;
  font-size: 15px;
  box-sizing: border-box;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const paragraphs = [
  "On the outskirts of Ekibastuz, Kazakhstan, the Enegix Data Center once stood as a testament to the nation’s rapid rise in the global cryptocurrency mining industry. Built after China’s 2021 crackdown on mining, the facility leveraged Kazakhstan’s abundant coal-powered electricity, underutilized Soviet-era energy infrastructure, and lax industrial regulations.",
  "By 2021, Kazakhstan ranked second globally in Bitcoin mining power. However, the surge of miners overwhelmed the energy grid, leading to blackouts and fueling public unrest. In January 2022, mass protests against corruption, inequality, and rising costs prompted the government to impose stricter energy controls, leaving many mining operations, including Enegix, in limbo.",
  "Enegix, which at its unregulated peak consumed 150 megawatts—five times the energy demand of Ekibastuz itself—relocated its operations to Brazil in pursuit of better profit margins. However, the high costs of dismantling and relocating the facility's infrastructure proved prohibitive.",
  "Rather than leaving the site to languish as another relic of a boom-bust cycle—much like the abandoned Soviet-era mines often claimed by multinational corporations—a coalition of government leaders and community members intervened. They negotiated the purchase of the data center and its infrastructure at a reduced price, ensuring it remained in local hands.",
  "Today, the Enegix facility stands as a hub for public good, repurposed for computational education, ecological research, and sustainable technology. This transformation not only addresses the scars of environmental and economic exploitation but also redefines Ekibastuz as a center of resilience and innovation, breaking free from the cycles of extraction and abandonment that have shaped its history.",
];

const boxPositions = [
  { top: 250, left: 43 }, // Position of first box
  { top: 250, left: 356 }, // Second box (43px gap)
  { top: 250, left: 669 }, // Third box (43px gap)
  { top: 250, left: 982 }, // Fourth box (43px gap)
  { top: 250, left: 1295 }, // Fifth box (43px gap)
  { top: 250, left: 1609 }, // Sixth box (43px gap)
];

const Intro = () => {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hover state
  const navigate = useNavigate(); // Hook for navigation

  const handleBoxClick = (index) => {
    if (index === 5) {
      // Redirect to the /site route if the 6th box is clicked
      navigate("/site");
    } else {
      // Toggle visibility for other boxes
      setVisibleIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index
  };

  return (
    <Container>
      <BackgroundImage
        src="/web-skeleton.png" // Replace with your actual image path
        alt="background"
      />
      {boxPositions.map((pos, index) => (
        <React.Fragment key={index}>
          <Box
            top={pos.top}
            left={pos.left}
            isVisible={visibleIndices.includes(index)}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => handleMouseEnter(index)} // Handle hover
            onMouseLeave={handleMouseLeave} // Reset hover state
            onClick={() => handleBoxClick(index)}
          />
          {index !== 5 && ( // Render TextBox for all boxes except the 6th one
            <TextBox
              top={pos.top}
              left={pos.left}
              isVisible={visibleIndices.includes(index)}
            >
              {paragraphs[index]}
            </TextBox>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Intro;
