import { Container } from './styles';
import Image from 'next/image';
import { Slider } from './Slider';

export const MainProducts = () => {
  return (
    <Container>
      <header>
        <Image src="/svg/detail.svg" height={64} width={64} />
        <h2>Produtos em destaque</h2>
      </header>

      <Slider />
    </Container>
  );
};
