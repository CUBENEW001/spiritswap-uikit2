import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;
const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <>
      <img {...props} src="/images/logo.png" alt="" width="80" height="116" />
      <span style={{ color: "#52D784", letterSpacing: "3px" }}>
        Spirit<span style={{ color: "#60D5DC" }}>Swap</span>
      </span>
    </>
  );
};

export default Logo;
