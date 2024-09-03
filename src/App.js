import styled from "styled-components";
import HomeComponent from "./modules/home";
/*
font-family: 'Jost', sans-serif;

font-family: 'Montserrat', sans-serif;

font-family: 'Poppins', sans-serif;

font-family: 'Roboto', sans-serif;

font-family: 'Spline Sans Mono', monospace;
*/
const Container = styled.div`
  display: flex;
  background-color: #e5e4e2;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 30px auto;
  max-width: 1000px;
  max-height: 1000px;
`;

const Header = styled.span`
  color: #2a3439;
  font-size: 25px;
  font-weight: bolder;
`;

function App() {
  return (
    <Container>
      <Header>Budget Vyavastha</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
