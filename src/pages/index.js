import { Banner } from '../components/Banner';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { MainProducts } from '../components/MainProducts';
import { Container } from '../styles/pages/home';

const Home = () => {
  return (
    <Container>
      <Banner />

      <section className="cards">
        <Card
          backImage="https://i.imgur.com/B4x5HiR.png"
          title="The Legend of Zelda - Breath of the wild"
        />
        <Card
          backImage="https://i.imgur.com/saJW1i5.png"
          title="SEKIRO - Shadows die twice"
        />
      </section>

      <MainProducts />
      
      <Footer />
    </Container>
  );
};

export default Home;
