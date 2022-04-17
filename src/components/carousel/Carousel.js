import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.scss'

import item_1 from './carousel_img/Rectangle 1.png'
import item_2 from './carousel_img/Rectangle 2.png'
import item_3 from './carousel_img/Rectangle 3.png'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={item_1} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" />,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => {
  return (
    <AliceCarousel mouseTracking
                   responsive={{
                      480: {items: 1},
                      1024: {items: 3.5}
                   }}
                   disableButtonsControls={true}
                   disableDotsControls={true}
                   items={items} />
  );
}


export default Carousel;
