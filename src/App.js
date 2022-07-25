import styled from "styled-components";
import Nav from "./components/Nav";
import JobFilter from "./components/JobFilter";
import Jobs from "./components/Jobs";

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <span>Github</span> Jobs
      </AppHeader>
      <AppNav>
        <Nav />
      </AppNav>
      <AppMain>
        <AppMainLeft>
          <JobFilter />
        </AppMainLeft>
        <AppMainRight>
          <Jobs />
        </AppMainRight>
      </AppMain>
      <AppFooter>created by Ibrahim - devChallenges.io</AppFooter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  padding: 12px;
  height: 100vh;
  @media (min-width: 790px) {
    padding: 12px 120px;
  }
`;
const AppHeader = styled.header`
  margin-bottom: 32px;
  > span {
    font-weight: bold;
  }
`;
const AppNav = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 138px;
`;
const AppMain = styled.main`
  margin-top: 32px;

  @media (min-width: 790px) {
    display: flex;
  }
`;
const AppMainLeft = styled.section`
  margin-bottom: 32px;
  flex: 1;
`;
const AppMainRight = styled.section`
  flex: 2;
`;
const AppFooter = styled.footer`
  position: absolute;
  bottom: 12px;
`;

export default App;
