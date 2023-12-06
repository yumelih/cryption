import styled, { css } from "styled-components";

const HeadingMid = styled.h2`
  color: var(--color-gray);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-size: 2.3rem;
  ${(props) =>
    props.type === "white" &&
    css`
      color: var(--color-white);
      text-transform: unset;
      letter-spacing: normal;
    `}
`;

export default HeadingMid;
