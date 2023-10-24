import Container from "./common/Container";
import { Header } from "./features/author/PersonalHomepage/Header";
import { Skills } from "./features/author/PersonalHomepage/Skills";
import { WantToLearn } from "./features/author/PersonalHomepage/WantToLearn";

function App() {

  return (
    <Container>
      <Header />
      <Skills />
      <WantToLearn />
    </Container>
  );
}

export default App;
