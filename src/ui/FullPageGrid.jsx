import styled from "styled-components";

const FullPageGrid = styled.div`
  display: grid;
  grid-template-rows: 80vh repeat(3, min-content);
  grid-template-columns:
    [full-start] 8rem [center-start] repeat(
      4,
      [col-start] minmax(min-content, 1fr) [col-end]
    )
    [center-end] 8rem [full-end];
`;

export default FullPageGrid;
