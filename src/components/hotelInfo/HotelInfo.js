import { useState } from 'react';

import ReactStars from 'react-stars';

import favorites from '../../img/heart.svg';
import favorites_actv from '../../img/heart-active.svg';

import './hotelInfo.scss';

const HotelInfo = ({name, checkIn, days, price, stars, id, toFavorite, fromFavorite, isActive}) => {
    
    // для склонения слов (день, дня, дней)
    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
    }

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
                
                    {/* // !active ?  */}
                        <img className="hotelItem__heart" src={isActive === false ? favorites : favorites_actv} alt="favorites" onClick={isActive === false ? () => toFavorite(id) : () => fromFavorite(id)} />
                        {/* // <img className="hotelItem__heart" src={favorites_actv} alt="favorites active" onClick={() => {fromFavorite(id); setActive(false)}} /> */}
                
                <p className="hotelItem__price">{Math.ceil(price).toLocaleString()} ₽</p>
            </div>
        </div>
    )
}

export default HotelInfo;