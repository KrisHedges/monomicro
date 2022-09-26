import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ChakraUiProps {}

const StyledChakraUi = styled.div`
  color: pink;
`;

export function ChakraUi(props: ChakraUiProps) {
  return (
    <StyledChakraUi>
      <h1>Welcome to ChakraUi!</h1>
    </StyledChakraUi>
  );
}

export default ChakraUi;
