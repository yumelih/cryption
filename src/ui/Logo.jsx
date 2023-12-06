import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyledLogo = styled.img`
  height: 100%;
`;

const StyledLink = styled(Link)`
  ${(props) =>
    css`
      height: ${props.imgHeight};
    `}
  width: auto;
`;

function Logo({ src, imgHeight = "5rem" }) {
  return (
    <>
      <StyledLink to="/" imgHeight={imgHeight}>
        <StyledLogo src={src} />
      </StyledLink>
    </>
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  imgHeight: PropTypes.string,
};

export default Logo;
