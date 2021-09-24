import { Container } from './styles';
import SliderSlick from 'react-slick';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { featuredGames } from '../../../utils/featuredGames';
import { SlideCard } from '../SlideCard';

export const Slider = () => {
  const { width } = useWindowSize();

  const getCurrentLength = () => {
    if (width > 1152) {
      return 3;
    } else if (width > 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getCurrentLength(),
    slidesToScroll: 1,
  };

  return (
    <Container>
      <SliderSlick {...settings}>
        {featuredGames.map(game => (
          <SlideCard key={game.id.toString()} game={game} />
        ))}
      </SliderSlick>
    </Container>
  );
};
