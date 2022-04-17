import { useSelector} from "react-redux";

import Carousel from "../carousel/Carousel";
import HotelInfo from '../hotelInfo/HotelInfo';
import house from '../../img/house.svg';
import './hotelsList.scss';

const HotelsList = () => {
    const arrHotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);


    const dateFullFormat = (date) => {
        const res = date.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return res.slice(0, 14)
    }

    return(
        <>
            <div className="header flex-row">
                <div className="header__left flex-row">
                    <span>Отели</span>
                    <span>{formInputs.city}</span>
                </div>
                <span className="header__right">{dateFullFormat(formInputs.checkIn)}</span>
            </div>
            <Carousel />
            <div className="hotelInfo">
                {Object.values(arrHotels).map(el => {
                    return  <>
                                <div className='hotelInfo__card flex-row'>
                                    <div className="hotelInfo__house">
                                        <img className="hotelInfo__img" src={house} alt="house svg" />
                                    </div>
                                    <HotelInfo name={el.hotelName}
                                                checkIn={dateFullFormat(formInputs.checkIn)}
                                                days={formInputs.days}
                                                stars={el.stars}
                                                price={el.priceFrom}
                                                key={el.hotelId} />
                                </div>
                                <hr />
                            </>
                })}
            </div>
        </>
    )
}

export default HotelsList;