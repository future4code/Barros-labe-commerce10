import TieFighter from './images/TieFighter-FukuSaku.jpg';
import TieBomber from './images/images.jpg';
import StarDestroyer from './images/ANH-Star-Destroyer-Front.png';
import nave1 from './images/shuttle.jpg';
import nave2 from './images/xwing.webp';
import nave3 from './images/cruiser.jpeg';

export const productData = [
  { 
    id:1,
    img: TieFighter,
    alt: 'Imagem de um Caça TIE',
    name: 'Caça TIE',
    desc:
      'Rápido e ideal para acabar com pequenos bombardeiros ou traficantes interespaciais.',
    price: '₡19.000,99',
    button: 'Comprar'
  },
  {
    id:2,
    img: TieBomber,
    alt: 'Imagem de um Bombardeiro TIE',
    name: 'Bombardeiro TIE',
    desc:
      ' Liquide com as grandes naves de guerra do seu oponente sem arriscar perder as suas.',
    price: '₡16.000,99',
    button: 'Comprar'
  },
  {
    img: StarDestroyer,
    alt: 'Imagem de um Crusador Imperial',
    name: 'Crusador Imperial',
    desc:
      ' Todo o poder, imponência e classe imperial com ar de fábrica e insufilm na lateral.',
    price: '₡1.499.000,99',
    button: 'Comprar'
  }
];

export const productDataTwo = [
  {
    img: nave1,
    alt: 'Imagem de um Transportador',
    name: 'Transportador',
    desc:
      'Carregue seu exército através de grandes distâncias no espaço com eficiência e rapidez.',
    price: '₡9.999,99',
    button: 'Comprar'
  },
  {
    img: nave3,
    alt: 'Imagem de um Crusador de Alderaan',
    name: 'Crusador de Alderaan',
    desc:
      'Um navio resistente e ágil, ideal para fugir de grandes frotas e transportar autoridades.',
    price: '₡1.140.000,50',
    button: 'Comprar'
  },
  {
    img: nave2,
    alt: 'Imagem de Caça Asa-X',
    name: 'Caça Asa-X',
    desc:
      'Destrua estrelas da morte, caças e tem um design único com uma asa desnecessária mas bem legal.',
    price: '₡22.000,20',
    button: 'Comprar'
  }
];