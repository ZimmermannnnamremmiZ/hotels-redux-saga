import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.scss'

import item_1 from './carousel_img/Rectangle 1.png'
import item_2 from './carousel_img/Rectangle 2.png'
import item_3 from './carousel_img/Rectangle 3.png'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={item_1} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_1} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_2} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
  <img src={item_3} onDragStart={handleDragStart} role="presentation" alt="hotel"/>,
];

const Carousel = () => {
  return (
    <AliceCarousel mouseTracking
                   responsive={{
                      0: {items: 1.5},
                      420: {items: 2},
                      480: {items: 2.4},
                      515: {items: 2.7},
                      600: {items: 3.1},
                      653: {items: 3.5},
                      768: {items: 2.4},
                      850: {items: 2.8},
                      945: {items: 3.1},
                      1080: {items: 3.4},
                   }}
                   disableButtonsControls={true}
                   disableDotsControls={true}
                   items={items} />
  );
}


export default Carousel;
