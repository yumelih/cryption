import styled from "styled-components";
import HeadingLarge from "../../ui/HeadingLarge";
import HeadingMid from "../../ui/HeadingMid";
import StyledText from "../../ui/Text";
import ColoredSpan from "../../ui/ColoredSpan";

import ChartIcon from "../../assets/chart.png";
import GraphIcon from "../../assets/graph.png";
import RobotIcon from "../../assets/robot.png";

const StyledFeatures = styled.section`
  grid-column: center-start / center-end;
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  text-align: start;
  gap: 4rem;
  align-items: start;
  margin-top: 2rem;
`;

const GridElement = styled.div`
  border: 1px solid rgba(59, 68, 75, 0.5);
  border-radius: 30px;
  padding: 3rem;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledImg = styled.img`
  height: 15rem;
  margin-bottom: 2rem;
`;

function Features() {
  return (
    <StyledFeatures>
      <HeadingMid>Features</HeadingMid>
      <HeadingLarge>
        Some reasons to <ColoredSpan>Choose Us</ColoredSpan>
      </HeadingLarge>
      <StyledText type="mid">
        Our team&apos;s passion for Web3 technologies. Unwavering commitment to
        our customers and deep knowledge about cryptocurrencies.
      </StyledText>
      <GridAuto>
        <GridElement>
          <StyledImg src={RobotIcon} />
          <HeadingMid type="white">Customer satisfaction</HeadingMid>
          <StyledText type="mid">
            Our top priority is always the satisfaction of our clients, and we
            work tirelessly to ensure that each of our clients is completely
            satisfied with our services.
          </StyledText>
        </GridElement>

        <GridElement>
          <StyledImg src={ChartIcon} />
          <HeadingMid type="white">Set up your watchlist</HeadingMid>
          <StyledText type="mid">
            Create your cryptocurrency watchlist to stay informed about price
            fluctuations. Keep track of market trends. Be aware of the markets.
          </StyledText>
        </GridElement>
        <GridElement>
          <StyledImg src={GraphIcon} />
          <HeadingMid type="white">Make several portfolios</HeadingMid>
          <StyledText type="mid">
            Create diverse investment portfolios, adapting them to market trends
            and your financial objectives for a balanced investment strategy.
          </StyledText>
        </GridElement>
      </GridAuto>
    </StyledFeatures>
  );
}

export default Features;
