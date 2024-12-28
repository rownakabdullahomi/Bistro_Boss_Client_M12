import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from '../../assets/home/01.jpg';
import slider2 from '../../assets/home/02.jpg';
import slider3 from '../../assets/home/03.png';
import slider4 from '../../assets/home/04.jpg';
import slider5 from '../../assets/home/05.png';
import slider6 from '../../assets/home/06.png';

const Slider = () => {
  return (
    <Carousel>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider1} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider4} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider5} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div className="h-[600px]">
        <img className="h-full object-center" src={slider6} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Slider;
