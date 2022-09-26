import MuiButton from "@mui/material/ButtonBase";
import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledButton = styled(MuiButton)`
  background-color: ${props => props.theme['colors'].primary};
  color: white;
  padding: 0.5em 1.5em;
  margin: 0.5em 0;
  font-size: 1.8em;
  border-radius: 2em;
  border: 2px solid white;
`
const default_theme = {
  colors: {
    primary: 'cornflowerblue'
  }
}

export interface ButtonProps {
  theme?: Theme,
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const theme = props.theme && Object.keys(props.theme).length > 0 ? props.theme : default_theme;

  return (
    <ThemeProvider theme={ theme }>
      <StyledButton disableRipple >
        {props.children || 'Button'}
      </StyledButton>
    </ThemeProvider>
  );
}

export default Button;
