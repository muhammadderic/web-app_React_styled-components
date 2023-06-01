import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import { Container } from "./styled/Container.styled";
import content from "./dummyData";

function App() {
  return (
    <>
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
