import { useSelector, useDispatch } from "react-redux";

import HotelInfo from "../hotelInfo/HotelInfo";

import { setFiltered } from "../../redux/actions/actionCreator";
import dateFullFormat from "../../auxiliary_fn/date_text";
import './favorite.scss';


const Favorite = () => {
    const dispatch = useDispatch()

    const hotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);
    const favorite = useSelector(state => state.favorite)

    const fromFavorite = (id) => {
        const filtered = Object.values(favorite).filter(el => el.hotelId !== id);
        const selected = Object.values(hotels).find(el => el.hotelId === id); 
        if (selected !== undefined) selected.isActive = false;
        console.log(selected)
        dispatch(setFiltered(filtered));
    }
    
    return (
        <div className="favorite">
            <h3 className="favorite__title">Избранное</h3>
            <div className="favorite__list">
                {Object.values(favorite).map(el => {
                        return  <div key={el.hotelId}>
                                    <div className='favorite__item flex-row'>
                                        <HotelInfo name={el.hotelName}
                                                   checkIn={dateFullFormat(formInputs.checkIn)}
                                                   days={formInputs.days}
                                                   stars={el.stars}
                                                   price={el.priceFrom}
                                                   id={el.hotelId}
                                                   fromFavorite={fromFavorite}
                                                   key={el.hotelId}
                                                   isActive={el.isActive} />
                                    </div>
                                    <hr />
                                </div>
                })}
            </div>
        </div>
    )
}

export default Favorite;