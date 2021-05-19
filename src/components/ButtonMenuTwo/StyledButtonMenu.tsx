import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../ButtonTwo/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  //background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;
  border-radius: 0.5rem;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
