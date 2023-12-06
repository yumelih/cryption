import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    gap: ${props.gap};
  `};
`;

export default Row;
