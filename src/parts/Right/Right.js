import React,{useContext} from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import StatsBoxes from "../../components/StatsBoxes/StatsBoxes";
import YourStats from "../../components/YourStats/YourStats";
import Banner from "../../components/PremiumBanner/Banner";
import { CourseContext } from "../../contexts/CourseContext";

const Container = styled.div`
  flex: 1 1 40%; /* stretching: */
  // border: 1px solid red;
  margin: 30px;
  @media (max-width: 768px) {
    --layout-stackpoint: initial;
    --layout-margin-h: 0;
    --layout-margin-v: 0;
    display: flex;
    flex-wrap: wrap;
    
    margin-top: calc(-1 * var(--layout-margin-v, 0));
    margin-left: calc(-1 * var(--layout-margin-h, 0));
  }
`;
function Right() {
  const {searchdata } = useContext(CourseContext);
  return (
    <Container>
      <Navigation coursenames={searchdata}/>
      <StatsBoxes/>
      <YourStats/>
      <Banner/>
    </Container>
  );
}

export default Right;
