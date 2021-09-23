import { Container } from './styles';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Container>
      <div>
        <Image src="/img/logo-n1.png" width={60} height={40} />
      </div>
      <span>Agência N1 - Todos os direitos reservados</span>
    </Container>
  );
};
