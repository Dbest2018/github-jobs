import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import JobFilter from "./components/JobFilter";
import Jobs from "./components/Jobs";

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Header />
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

const AppContainer = styled.div``;
const AppHeader = styled.header``;
const AppNav = styled.nav``;
const AppMain = styled.main``;
const AppMainLeft = styled.section``;
const AppMainRight = styled.section``;
const AppFooter = styled.footer``;

export default App;
