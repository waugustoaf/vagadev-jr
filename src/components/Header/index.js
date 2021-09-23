import Image from 'next/image';
import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { Menu } from '../Menu';
import { Container, LinkContainer } from './styles';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [currentGameId, setCurrentGameId] = useState(1);

  const theme = useTheme();

  const handleToggleMenuVisibility = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <Container isMenuVisible>
      <div class="tab">
        <button type="button" onClick={handleToggleMenuVisibility}>
          {isMenuVisible ? (
            <IoMdClose size={32} color={theme.colors.shape} />
          ) : (
            <HiMenuAlt2 size={32} color={theme.colors.shape} />
          )}
        </button>
        <Image src="/img/logo.png" width={200} height={50} />
      </div>
      <nav>
        <LinkContainer>
          <Image src="/svg/paper-plane.svg" height={32} width={32} />
          <span>Contato</span>
        </LinkContainer>
        <LinkContainer>
          <Image src="/svg/search-solid.svg" height={32} width={32} />
          <span>Buscar</span>
        </LinkContainer>
        <LinkContainer last>
          <Image src="/svg/shopping-bag-solid.svg" height={32} width={32} />
        </LinkContainer>
      </nav>

      {isMenuVisible && (
        <Menu gameId={currentGameId} setCurrentGameId={setCurrentGameId} />
      )}
    </Container>
  );
};