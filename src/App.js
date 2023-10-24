import Container from "./common/Container";
import { Header } from "./features/author/PersonalHomepage/Header";
import { Portfolio } from "./features/author/PersonalHomepage/Portfolio";
import { Skills } from "./features/author/PersonalHomepage/Skills";
import { WantToLearn } from "./features/author/PersonalHomepage/WantToLearn";

function App() {

  return (
    <Container>
      <Header />
      <Skills />
      <WantToLearn />
      <Portfolio />
    </Container>
  );
}

export default App;
