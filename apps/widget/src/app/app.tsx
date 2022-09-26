import styled from '@emotion/styled';
import { App as DataListApplication } from 'apps/datalist/src/app/app';
import {ChakraButton} from '@monomicro/chakra-ui';

const StyledApp = styled.div`
  // Your style here
  padding: 2em;
  background-color: black;
  color: white;
  .app-wrapper-5000 {
    padding: 1em;
    border: 1px solid purple;
  }
`;

const ListData = { what: 'wut' };

export function App() {
  return (
      <StyledApp>
        <h1>I'm an Application(Widget in apps)</h1>
        <h2>Using the Datalist Application</h2>
        <div className="app-wrapper-5000">
          <DataListApplication data={ListData}/>
        </div>
        <ChakraButton/>
      </StyledApp>
  );
}

export default App;
