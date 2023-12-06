import styled from "styled-components";
import btc from "../../assets/logos/btc-logo.png";
import eth from "../../assets/logos/eth-logo.png";
import bnb from "../../assets/logos/bnb-logo.png";
import ada from "../../assets/logos/ada-logo.png";
import usdc from "../../assets/logos/usdc-logo.png";
import doge from "../../assets/logos/doge-logo.png";
import xrp from "../../assets/logos/xrp-logo.png";
import trx from "../../assets/logos/trx-logo.png";
import usdt from "../../assets/logos/usdt-logo.png";
import sol from "../../assets/logos/sol-logo.png";

const StyledCryptoLogos = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4rem 0;
  border: 1px solid rgba(59, 68, 75, 0.5);
  border-radius: 30px;
  padding: 4rem;
`;

const StyledCryptoImg = styled.img`
  height: 8rem;
  width: auto;
  filter: grayscale(100%);
`;

function CryptoLogos() {
  return (
    <StyledCryptoLogos>
      <StyledCryptoImg src={btc} />
      <StyledCryptoImg src={eth} />
      <StyledCryptoImg src={bnb} />
      <StyledCryptoImg src={ada} />
      <StyledCryptoImg src={usdc} />
      <StyledCryptoImg src={doge} />
      <StyledCryptoImg src={xrp} />
      <StyledCryptoImg src={sol} />
      <StyledCryptoImg src={usdt} />
      <StyledCryptoImg src={trx} />
    </StyledCryptoLogos>
  );
}

export default CryptoLogos;
