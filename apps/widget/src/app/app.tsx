import styled from '@emotion/styled';
import { App as DataListApplication } from '../../../datalist/src/app/app';

const StyledApp = styled.div`
  // Your style here
  padding: 2em;
  background-color: black;
  color: white;
`;

const ListData = { what: 'wut' };

export function App() {
  return (
      <StyledApp>
        <h1>I'm an Application(Widget in apps)</h1>
        <h2>Using the Datalist Application</h2>
        <DataListApplication data={ListData}/>
      </StyledApp>
  );
}

export default App;
