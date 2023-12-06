import styled from "styled-components";
import Header from "../features/home/Header";
import FullPageGrid from "../ui/FullPageGrid";
import Navbar from "../ui/Navbar";
import Features from "../features/home/Features";
import CryptoLogos from "../features/home/CryptoLogos";

const GridRowLayout = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: 15rem 1fr;
  background-image: url("/header-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  padding: 0 4rem;
  backdrop-filter: blur(0);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    /* Gradient overlay - adjust the starting point as needed */
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 95%,
      #383737 100%
        /* Change --- to match your images predominant background color */
    );

    /* Blur effect */
    filter: brightness(15%);
    /* Adjust the blur intensity as needed */
  }
`;

function Home() {
  return (
    <FullPageGrid>
      <GridRowLayout>
        <Navbar />
        <Header />
      </GridRowLayout>
      <Features />
      <CryptoLogos />
    </FullPageGrid>
  );
}

export default Home;
