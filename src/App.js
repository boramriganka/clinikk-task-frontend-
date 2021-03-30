import "./App.css";
import Left from "./parts/Left/Left";
import Right from "./parts/Right/Right";
import Mid from "./parts/Mid/Mid";
import styled from "styled-components";
import CourseContextProvider from "./contexts/CourseContext";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  & > Left {
    flex: 0.1;
    position: fixed;
  }

  & > Right {
    flex: 0.45;
  }
  & > Mid {
    flex: 0.45;
  }
  @media (max-width: 768px) {
    --layout-stackpoint: initial;
    --layout-margin-h: 0;
    --layout-margin-v: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    margin-top: calc(-1 * var(--layout-margin-v, 0));
    margin-left: calc(-1 * var(--layout-margin-h, 0));
  }
`;

function App() {
  return (
    <CourseContextProvider>
      <MainContainer>
        <Left />
        <Mid />
        <Right />
      </MainContainer>
    </CourseContextProvider>
  );
}

export default App;
