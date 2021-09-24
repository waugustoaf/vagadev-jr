import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { FiMail, FiMessageSquare, FiUser } from 'react-icons/fi';
import { AiOutlineFileText } from 'react-icons/ai';
import { Input } from '../components/Form/Input';
import { TextArea } from '../components/Form/TextArea';
import {
  Container,
  Content,
  HeaderContainer,
  Image,
} from '../styles/pages/contact';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/dist/client/router';

const formSchema = Yup.object().shape({
  name: Yup.string().required('O nome deve ser informado.'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail deve ser informado.'),
  subject: Yup.string().required('O assunto deve ser informado'),
  message: Yup.string()
    .required('A mensagem deve ser informada')
    .min(20, 'Deve conter no mínimo 20 caracteres'),
});

const Contact = () => {
  const router = useRouter();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleSend = data => {
    console.log(data);
    router.push('/');
  };

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

        <form onSubmit={handleSubmit(handleSend)}>
          <Input
            name="name"
            error={errors.name || {}}
            icon={FiUser}
            placeholder="Nome"
            getValues={getValues}
            register={register}
          />
          <Input
            name="email"
            error={errors.email || {}}
            icon={FiMail}
            placeholder="E-mail"
            getValues={getValues}
            register={register}
          />
          <Input
            name="subject"
            error={errors.subject || {}}
            icon={AiOutlineFileText}
            placeholder="Assunto"
            getValues={getValues}
            register={register}
          />

          <TextArea
            name="message"
            error={errors.message || {}}
            placeholder="Digite aqui como podemos te ajudar"
            icon={FiMessageSquare}
            getValues={getValues}
            register={register}
            rows="3"
          />

          <button type="submit" title="Enviar">
            Confirmar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Contact;
