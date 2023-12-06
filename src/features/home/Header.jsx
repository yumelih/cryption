import styled from "styled-components";
import HeadingLarge from "../../ui/HeadingLarge";
import StyledText from "../../ui/Text";
import Row from "../../ui/Row";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8rem;
  position: relative;
  text-align: center;
  gap: 4rem;
`;

const StyledSpan = styled.span`
  color: white;
  display: block;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 2rem 6rem;
  position: relative;
  border: none;
  border-radius: 60px;
  box-shadow: rgba(127, 17, 224, 0.5) 0px 13px 27px -5px,
    rgba(127, 17, 224, 0.5) 0px 8px 16px 4px;

  transition: box-shadow 0.2s;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 0.5rem;
    background: var(--color-purple-to-blue);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: padding 0.2s;
  }

  &:hover {
    box-shadow: none;
  }

  &:hover::before {
    padding: 0.3rem;
  }
`;

const StyledButtonArrow = styled.p`
  cursor: pointer;
  font-size: 1.8rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;

  &:hover {
    opacity: 80%;
    gap: 1.2rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeadingLarge type="with-background">
        Track your
        <StyledSpan>cryptos</StyledSpan>
      </HeadingLarge>
      <StyledText>
        Track your crypto currencies. Set watchlists with currencies of your
        choosing. And build mock portfolios and check their incomes.
      </StyledText>
      <Row gap="5rem">
        <StyledButton>Set Watchlist</StyledButton>
        <StyledButtonArrow role="button">
          Make Portfolio <span style={{ fontSize: "3rem" }}>&#10132;</span>
        </StyledButtonArrow>
      </Row>
    </StyledHeader>
  );
}

export default Header;
