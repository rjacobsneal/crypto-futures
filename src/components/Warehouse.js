import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 1920px;
  height: 1080px;
  object-fit: contain;
`;

const OverlayImage = styled.img`
  position: absolute;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
  object-fit: contain;
  pointer-events: none;
`;

const TextOverlay1 = styled.div`
  position: absolute;
  top: 200px;
  left: 1150px;
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: white;
  text-align: left;
  z-index: 10;
  overflow-y: auto;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const TextOverlay2 = styled.div`
  position: absolute;
  top: 800px;
  left: 850px;
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: white;
  text-align: left;
  z-index: 10;
  overflow-y: auto;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const Box = styled.div`
  position: absolute;
  border: 0px solid black;
  background-color: ${({ isHovered, isFirstBoxTransparent }) =>
    isHovered || isFirstBoxTransparent ? "transparent" : "rgba(0, 0, 0, 1)"};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Warehouse = () => {
  const [hoveredBoxes, setHoveredBoxes] = useState([]);
  const [isOverlay1Visible, setOverlay1Visible] = useState(false);
  const [isOverlay2Visible, setOverlay2Visible] = useState(false);
  const imageRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredBoxes((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredBoxes((prev) => prev.filter((i) => i !== index));
  };

  const boxPositions = [
    {
      top: 43,
      left: 43,
      width: 382,
      height: 357,
      url: "https://x.com/i/status/1597869268301144064",
      overlay1: true,
    },
    {
      top: 659,
      left: 1606,
      width: 266,
      height: 387,
      url: "https://www.youtube.com/watch?v=FsZc0n3Qqy4",
      overlay2: true,
    },
  ];

  const handleClick = (index) => {
    if (boxPositions[index].overlay1) {
      setOverlay1Visible(true);
    }
    if (boxPositions[index].overlay2) {
      setOverlay2Visible(true);
    }
  };

  return (
    <Container>
      <Image
        ref={imageRef}
        src="/buildings-outlines-05.jpg"
        alt="central image"
      />
      {isOverlay1Visible && (
        <>
          <OverlayImage src="/warehouse-bubble.png" alt="Overlay1" />
          <TextOverlay1 isVisible={isOverlay1Visible}>
            <h2>Heat Recycling</h2>
            <p>
              Data centers generate significant heat, which can be repurposed to
              create sustainable indoor farming solutions. This reduces energy
              waste and promotes year-round agricultural production. The Enegix
              data center has experiemented with this tehnology already. The
              Enegix data center has experiemented with this tehnology already.
              The Enegix data center has experiemented with this tehnology
              already.
            </p>
          </TextOverlay1>
        </>
      )}
      {isOverlay2Visible && (
        <>
          <OverlayImage src="/warehouse-man.png" alt="Overlay2" />
          <TextOverlay2 isVisible={isOverlay2Visible}>
            <h2>E-Waste Harvesting</h2>
            <p>
              E-waste harvesting involves extracting valuable materials such as
              gold, silver, and copper from discarded electronics. By
              repurposing these materials, we reduce mining demands and
              contribute to a circular economy, minimizing environmental harm.
            </p>
          </TextOverlay2>
        </>
      )}
      {boxPositions.map((position, index) => {
        const { top, left, width, height, url } = position;
        const boxStyle = {
          top: top,
          left: left,
          width: width,
          height: height,
        };

        return (
          <Link
            to={url}
            key={index}
            target="_blank"
            style={{ textDecoration: "none" }}
            onClick={() => handleClick(index)}
          >
            <Box
              isHovered={hoveredBoxes.includes(index)}
              style={boxStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          </Link>
        );
      })}
    </Container>
  );
};

export default Warehouse;
