import { useSelector, useDispatch} from "react-redux";
import { setFavorite, setFiltered } from "../../redux/actions/actionCreator";

import getNoun from "../../auxiliary_fn/getNoun";
import dateFullFormat from "../../auxiliary_fn/date_text";
import Carousel from "../carousel/Carousel";
import HotelInfo from '../hotelInfo/HotelInfo';
import house from '../../img/house.svg';
import './hotelsList.scss';

const HotelsList = () => {
    const dispatch = useDispatch()

    const hotelsList = useSelector(state => Object.values(state.hotels));
    const formInputs = useSelector(state => state.searchData);
    const favorite = useSelector(state => Object.values(state.favorite))

    const toFavorite = (id) => {
        const favItem = hotelsList.find(el => el.hotelId === id)
        favItem.isActive = true;
        dispatch(setFavorite({[favItem.hotelId]: favItem}))
    }

    const fromFavorite = (id) => {
        const filtered = favorite.filter(el => el.hotelId !== id);
        const selected = hotelsList.find(el => el.hotelId === id);
        selected.isActive = false;
        dispatch(setFiltered(filtered));
    }

    return(
        <>
            <div className="hotelsBlock__header flex-row">
                <div className="hotelsBlock__header-left flex-row">
                    <span>Отели</span>
                    <span>{formInputs.city}</span>
                </div>
                <span className="hotelsBlock__header-right">{dateFullFormat(formInputs.checkIn)}</span>
            </div>
            <Carousel />
            <p style={favorite.length > 0 ? {"visibility": "visible"} : {"visibility": "hidden"}} className="favoriteLength">Добавлено в Избранное: <b>{favorite.length}</b> {getNoun(favorite.length, 'отель', 'отеля', 'отелей')}</p>
            <div className="hotelInfo">
                {Object.values(hotelsList).map(el => {
                    return  <div key={el.hotelId}>
                                <div className='hotelInfo__card flex-row'>
                                    <div className="hotelInfo__house">
                                        <img className="hotelInfo__img" src={house} alt="house svg" />
                                    </div>
                                    <HotelInfo name={el.hotelName}
                                               checkIn={dateFullFormat(formInputs.checkIn)}
                                               days={formInputs.days}
                                               stars={el.stars}
                                               price={el.priceFrom}
                                               id={el.hotelId}
                                               toFavorite={toFavorite}
                                               fromFavorite={fromFavorite}
                                               key={el.hotelId}
                                               isActive={el.isActive} />
                                </div>
                                <hr />
                            </div>
                })}
            </div>
        </>
    )
}

export default HotelsList;