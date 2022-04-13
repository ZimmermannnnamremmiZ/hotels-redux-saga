import { useSelector} from "react-redux";

import HotelInfo from '../hotelInfo/HotelInfo';
import './hotelsList.scss';

const HotelsList = () => {
    const arrHotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);

    const dateFullFormat = (date) => {
        const res = date.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    
        return res.slice(0, 14)
    }


    return(
        <div className="hotelsList__block">
            {Object.values(arrHotels).map(el => {
                return <HotelInfo name={el.hotelName}
                                  checkIn={dateFullFormat(formInputs.checkIn)}
                                  days={formInputs.days}
                                  price={el.priceFrom}
                                  key={el.hotelId}/>
            })}
        </div>
    )
}

export default HotelsList;