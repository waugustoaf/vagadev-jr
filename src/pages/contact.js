import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Container,
  Content,
  HeaderContainer,
  Image,
} from '../styles/pages/contact';

const Contact = () => {
  return (
    <Container>
      <HeaderContainer>
        <div className="back-button">
          <FaArrowLeft />
          <Link href="/" passHref>
            <a>Voltar</a>
          </Link>
        </div>
      </HeaderContainer>
      <Image />
      <Content>
        <h3>Precisa de ajuda?</h3>
        <h2>Converse conosco agora mesmo!</h2>

        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" placeholder="Digite aqui seu nome" />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="Digite aqui seu E-mail"
          />

          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            name="subject"
            placeholder="Digite aqui o assunto"
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            placeholder="Digite aqui como podemos te ajudar"
            rows="3"
          />

          <button>Confirmar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Contact;
