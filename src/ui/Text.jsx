import styled, { css } from "styled-components";

const StyledText = styled.p`
  color: var(--color-gray);
  ${(props) =>
    props.type === "big" &&
    css`
      font-size: 2.2rem;
    `}
  ${(props) =>
    props.type === "mid" &&
    css`
      font-size: 1.8rem;
    `}
`;

StyledText.defaultProps = {
  type: "big",
};

export default StyledText;
