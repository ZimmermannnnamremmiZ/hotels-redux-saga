import { useSelector, useDispatch} from "react-redux";
import { setFavorite, setFiltered } from "../../redux/actions/actionCreator";

import dateFullFormat from "../../auxiliary_fn/date_text";
import Carousel from "../carousel/Carousel";
import HotelInfo from '../hotelInfo/HotelInfo';
import house from '../../img/house.svg';
import './hotelsList.scss';

const HotelsList = () => {
    const dispatch = useDispatch()

    const hotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);
    const favorite = useSelector(state => state.favorite)

    const toFavorite = (id) => {
        Object.values(hotels).map(el => {
            if (el.hotelId === id) {
                el.isActive = true;
                dispatch(setFavorite({[el.hotelId]: el}))
            }
        })
    }

    const fromFavorite = (id) => {
        const filtered = Object.values(favorite).filter(el => el.hotelId !== id);
        const selected = Object.values(hotels).find(el => el.hotelId === id); 
        selected.isActive = false;
        dispatch(setFiltered(filtered));
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
                {Object.values(hotels).map(el => {
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