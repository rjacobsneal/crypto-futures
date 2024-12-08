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

const Box = styled.div`
  position: absolute;
  border: 0px solid black;
  background-color: ${({ isHovered, isFirstBoxClicked }) =>
    isFirstBoxClicked
      ? "transparent"
      : isHovered
      ? "transparent"
      : "rgba(0, 0, 0, 1)"};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Site = () => {
  const [hoveredBoxes, setHoveredBoxes] = useState([]);
  const [isFirstBoxClicked, setIsFirstBoxClicked] = useState(false); // Track first box state
  const imageRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredBoxes((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredBoxes((prev) => prev.filter((i) => i !== index));
  };

  const handleFirstBoxClick = () => {
    setIsFirstBoxClicked(true); // Set first box as clicked
  };

  const boxPositions = [
    {
      top: 134,
      left: 43,
      width: 1839,
      height: 817,
      url: "/site",
    },
    {
      top: 700,
      left: 130,
      width: 273,
      height: 160,
      url: "/warehouse",
    },
    {
      top: 700,
      left: 479,
      width: 273,
      height: 160,
      url: "/warehouse-2",
    },
    {
      top: 702,
      left: 830,
      width: 276,
      height: 160,
      url: "/warehouse-3",
    },
    {
      top: 702,
      left: 1178,
      width: 279,
      height: 160,
      url: "/warehouse-4",
    },
    {
      top: 500,
      left: 870,
      width: 46,
      height: 75,
      url: "/residence",
    },
    {
      top: 549,
      left: 929,
      width: 38,
      height: 41,
      url: "/dining",
    },
    {
      top: 208,
      left: 102,
      width: 235,
      height: 240,
      url: "/energy",
    },
  ];

  return (
    <Container>
      <Image
        ref={imageRef}
        src="/buildings-outlines-01.jpg"
        alt="central image"
      />
      {boxPositions.map((position, index) => {
        const { top, left, width, height, url } = position;
        const boxStyle = {
          top: top,
          left: left,
          width: width,
          height: height,
        };

        if (index === 0) {
          // Handle the first box separately
          return (
            <Link to={url} key={index} style={{ textDecoration: "none" }}>
              <Box
                key={index}
                style={boxStyle}
                isFirstBoxClicked={isFirstBoxClicked}
                onClick={handleFirstBoxClick}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            </Link>
          );
        }

        return (
          <Link
            to={isFirstBoxClicked ? url : "#"} // Enable links only if the first box is clicked
            key={index}
            style={{
              textDecoration: "none",
              pointerEvents: isFirstBoxClicked ? "auto" : "none",
            }}
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

export default Site;
