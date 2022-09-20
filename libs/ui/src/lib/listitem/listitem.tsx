import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const StyledListitem = styled.li`
  // Component Style
  padding: 1em;
  list-style: circle;
  background-color: ${props => props.theme['colors'].primary};
  color: white;
  font-size: 1.5em;
`;

const default_theme = {
  colors: {
    primary: 'blueviolet'
  }
}

export interface ListitemProps {
  theme?: Theme,
  children: React.ReactNode
}

export function Listitem(props: ListitemProps) {

  const theme = props.theme && Object.keys(props.theme).length > 0 ? props.theme : default_theme;

  return (
    <ThemeProvider theme={ theme } >
      <StyledListitem>
        { props.children }
      </StyledListitem>
    </ThemeProvider>
  );
}

export default Listitem;
