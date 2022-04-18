import { useSelector } from "react-redux";

import HotelInfo from "../hotelInfo/HotelInfo";

import dateFullFormat from "../../auxiliary_fn/date_text";
import './favorite.scss';


const Favorite = () => {
    const favorite = useSelector(state => state.favorite)
    
    return (
        <div className="favorite">
            <h3>Избранное</h3>
            {Object.values(favorite).map(el => {
                    return  <>
                                <div className='hotelInfo__card flex-row'>
                                    <HotelInfo name={el.hotelName}
                                               checkIn={dateFullFormat(favorite.checkIn)}
                                               days={favorite.days}
                                               stars={el.stars}
                                               price={el.priceFrom}
                                               id={el.hotelId}
                                               toFavorite={favorite}
                                               key={el.hotelId} />
                                </div>
                                <hr />
                            </>
                })}
        </div>
    )
}

export default Favorite;