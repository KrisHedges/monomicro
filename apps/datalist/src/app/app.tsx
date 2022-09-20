import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Listitem, Button } from '@monomicro/ui';

const StyledApp = styled.div`
  // Your style here
  padding: 2em;
  background-color: ${props => props.theme['colors'].primary};
  color: black;
`;

const default_theme = {
  colors: {
    primary: 'purple'
  }
}

export interface DataProps {
  data: {
    what: string
  },
  theme?: Theme
}

export function App(props: DataProps) {
  const theme = props.theme && Object.keys(props.theme).length > 0 ? props.theme : default_theme;

  return (
    <ThemeProvider theme = { theme } >
      <StyledApp>
        <h3>I'm an Application(DataList in apps)</h3>
        <span>Pass Me Data, {props.data.what}!?</span>
        <ul>
          <Listitem>
            I'm an "Unthemed" Component (Listitem) in the UI library
          </Listitem>
          <Button>
            I'm an "Unthemed" Component (Button) in the UI library
          </Button>
          <Listitem theme={theme}>
            I'm an "Themed" Component (Listitem) in the UI library
          </Listitem>
          <Button theme={theme}>
            I'm an "Themed" Component (Button) in the UI library
          </Button>
        </ul>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
