import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }

  h1 {
    flex-direction: column;
    text-align: center;
`;
