import { useSelector } from 'react-redux';
import ReactStars from 'react-stars';

import getNoun from '../../auxiliary_fn/getNoun';
import './hotelInfo.scss';

const HotelInfo = ({name, checkIn, days, price, stars, id, toFavorite, fromFavorite, isActive}) => {

    const favoriteList = useSelector(state => state.favorite)

    return(
        <div className="hotelItem">
            <div className="hotelItem__leftSide">
                <h5 className="hotelItem__name">{name}</h5>
                    <div className="flex-col">
                        <div className="flex-row">
                            <p className="hotelItem__date">{checkIn}</p>
                            <span className="hyphen"></span>
                            <p className="hotelItem__days">{days} {getNoun(days, 'день', 'дня', 'дней')}</p>
                        </div>
                        <ReactStars count={5}
                                    edit={false}
                                    color1={"#6C6845"}
                                    color2={"#CDBC1E"}
                                    value={stars}
                                    size={24} />
                    </div>
            </div>

            <div className="hotelItem__rightSide">
                <div className={isActive && favoriteList.id !== id ? "hotelItem__heart-active" : "hotelItem__heart"}
                     onClick={!isActive ? () => toFavorite(id) : () => fromFavorite(id)}
                />
                <p className="hotelItem__price">{Math.ceil(price).toLocaleString()} ₽</p>
            </div>
        </div>
    )
}

export default HotelInfo;