import { useSelector, useDispatch} from "react-redux";
import { setFavorite } from "../../redux/actions/actionCreator";

import dateFullFormat from "../../auxiliary_fn/date_text";
import Carousel from "../carousel/Carousel";
import HotelInfo from '../hotelInfo/HotelInfo';
import house from '../../img/house.svg';
import './hotelsList.scss';

const HotelsList = () => {
    const dispatch = useDispatch()

    const arrHotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);
    const favorite = useSelector(state => state.favorite)

    const toFavorite = (id) => {
        Object.values(arrHotels).map(el => {
            if (el.hotelId === id) dispatch(setFavorite({
                [el.hotelId] : el
            }))
        })
    }

    const fromFavorite = (id) => { //// не сделано
        const res = Object.values(favorite).filter(el => el.hotelId !== id)
        dispatch(setFavorite(res))
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
                                               id={el.hotelId}
                                               toFavorite={toFavorite}
                                               fromFavorite={fromFavorite}
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