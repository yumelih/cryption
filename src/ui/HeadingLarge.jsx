import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  font-size: 8rem;
  text-transform: capitalize;
  position: relative;
  z-index: 3;
  line-height: 1.25;

  ${(props) =>
    props.type === "with-background" &&
    css`
      background-image: var(--color-purple-to-blue);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    `}

  ${(props) =>
    props.type === "no-background" &&
    css`
      color: white;
      font-size: 5.5rem;
    `}
`;

StyledHeading.defaultProps = {
  type: "no-background",
};

export default StyledHeading;
