import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebSkeleton from "../assets/web-skeleton.png";

const paragraphs = [
  <>
    &gt;&gt; On the outskirts of Ekibastuz, Kazakhstan, the Enegix Data Center
    once stood as a testament to the nation’s rapid rise in the global
    cryptocurrency mining industry. Built after China’s 2021 crackdown on
    mining, the facility leveraged Kazakhstan’s abundant coal-powered
    electricity, underutilized Soviet-era energy infrastructure, and lax
    industrial regulations...
  </>,
  <>
    &gt;&gt; By 2021, Kazakhstan ranked{" "}
    <a
      href="https://decrypt.co/87293/bitcoin-mining-kazakhstan-power-china-hash-rate-price"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "white", textDecoration: "underline" }}
    >
      second globally
    </a>{" "}
    in Bitcoin mining power. However, the surge of miners overwhelmed the energy
    grid, leading to blackouts and fueling public unrest. In January 2022, mass
    protests against corruption, inequality, and rising costs prompted the
    government to impose{" "}
    <a
      href="https://dig.watch/updates/kazakhstan-freezes-millions-in-crypto-and-bans-coinbase"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "white", textDecoration: "underline" }}
    >
      stricter energy and market controls
    </a>
    , leaving many mining operations, including Enegix, in limbo...
  </>,
  <>
    &gt;&gt; Enegix, which at its unregulated peak consumed 150 megawatts—five
    times the energy demand of Ekibastuz itself—{" "}
    <a
      href="https://x.com/EnegixLLC/status/1810993752829481092"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "white", textDecoration: "underline" }}
    >
      relocated its operations to Brazil
    </a>{" "}
    in pursuit of better profit margins. However, the high costs of dismantling
    and relocating the facility's infrastructure proved prohibitive...
  </>,
  <>
    &gt;&gt; Rather than leaving the site to languish as another relic of a
    boom-bust cycle—much like the abandoned Soviet-era mines often claimed by
    multinational corporations—a coalition of government leaders and community
    members intervened. They negotiated the purchase of the data center and its
    infrastructure at a reduced price, ensuring it remained in local hands...
  </>,
  <>
    &gt;&gt; Today, the Enegix facility stands as a hub for public good,
    repurposed for computational education, ecological research, and sustainable
    technology. This transformation not only addresses the scars of
    environmental and economic exploitation but also redefines Ekibastuz as a
    center of resilience and innovation, breaking free from the cycles of
    extraction and abandonment that have shaped its history...
  </>,
];

const boxPositions = [
  { top: 250, left: 43 },
  { top: 250, left: 356 },
  { top: 250, left: 669 },
  { top: 250, left: 982 },
  { top: 250, left: 1295 },
  { top: 250, left: 1609 },
];

const Intro = () => {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleBoxClick = (index) => {
    if (index === 5) {
      navigate("/site");
    } else {
      setVisibleIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);

  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="container">
      <img
        src={WebSkeleton}
        alt="background"
        style={{ width: "1920px", height: "1080px" }}
      />
      {boxPositions.map((pos, index) => (
        <React.Fragment key={index}>
          <div
            className="overlay"
            style={{
              top: `${pos.top}px`,
              left: `${pos.left}px`,
              width: "271px",
              height: "271px",
              backgroundColor:
                hoveredIndex === index || visibleIndices.includes(index)
                  ? "transparent"
                  : "black",
            }}
            onClick={() => handleBoxClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
          {index !== 5 && visibleIndices.includes(index) && (
            <div
              className="text-overlay"
              style={{
                top: `${pos.top + 271 + 43}px`,
                left: `${pos.left}px`,
              }}
            >
              {paragraphs[index]}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Intro;
