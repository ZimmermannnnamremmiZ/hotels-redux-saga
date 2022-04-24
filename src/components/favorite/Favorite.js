import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import HotelInfo from "../hotelInfo/HotelInfo";

import { setFiltered } from "../../redux/actions/actionCreator";
import dateFullFormat from "../../auxiliary_fn/date_text";
import './favorite.scss';


const Favorite = () => {
    const dispatch = useDispatch()
    const hotels = useSelector(state => state.hotels);
    const formInputs = useSelector(state => state.searchData);
    const favorite = useSelector(state => state.favorite);

    const [sortPriceInc, setSortPriceInc] = useState(false);
    const [sortPriceDec, setSortPriceDec] = useState(false);
    const [sortRatingInc, setSortRatingInc] = useState(false);
    const [sortRatingDec, setSortRatingDec] = useState(false);

    const fromFavorite = (id) => {
        const filtered = Object.values(favorite).filter(el => el.hotelId !== id);
        const selected = Object.values(hotels).find(el => el.hotelId === id);
        if (selected !== undefined) selected.isActive = false;
        dispatch(setFiltered(filtered));
    }

    const sortByPriceInc= () => {
        const sorted = Object.values(favorite).sort((a, b) => a.priceFrom - b.priceFrom);
        dispatch(setFiltered(sorted));
        setSortPriceInc(true)
        setSortPriceDec(false)
        setSortRatingDec(false)
        setSortRatingInc(false)
    }

    const sortByPriceDec = () => {
        const sorted = Object.values(favorite).sort((a, b) => b.priceFrom - a.priceFrom);
        dispatch(setFiltered(sorted));
        setSortPriceDec(true)
        setSortPriceInc(false)
        setSortRatingDec(false)
        setSortRatingInc(false)
    }

    const sortByRatingInc = () => {
        const sorted = Object.values(favorite).sort((a, b) => a.stars - b.stars);
        dispatch(setFiltered(sorted));
        setSortRatingInc(true)
        setSortRatingDec(false)
        setSortPriceInc(false)
        setSortPriceInc(false)
    }

    const sortByRatingDec = () => {
        const sorted = Object.values(favorite).sort((a, b) => b.stars - a.stars);
        dispatch(setFiltered(sorted));
        setSortRatingDec(true)
        setSortRatingInc(false)
        setSortPriceInc(false)
        setSortPriceDec(false)
    }

    const btnStyle = (a, b, c) => {
        return a || b ? `favorite__sort--active ${c}` : `favorite__sort ${c}`;
    }

    return (
        <div className="favorite">
            <h3 className="favorite__title">Избранное</h3>
            <div className={btnStyle(sortRatingDec, sortRatingInc, "rating")}>
                <p>Рейтинг</p>
                <div style={sortRatingDec ? {color: "#41522E"} : {color: "rgba(0, 0, 0, 0.32)"}}  className="sort__top arrow is-top" onClick={sortByRatingDec}></div>
                <div style={sortRatingInc ? {color: "#41522E"} : {color: "rgba(0, 0, 0, 0.32)"}}  className="sort__down arrow is-bottom" onClick={sortByRatingInc}></div>
            </div>
            <div className={btnStyle(sortPriceDec, sortPriceInc, "price")}>
                <p>Цена</p>
                <div style={sortPriceDec ? {color: "#41522E"} : {color: "rgba(0, 0, 0, 0.32)"}} className="sort__top arrow is-top" onClick={sortByPriceDec}></div>
                <div style={sortPriceInc ? {color: "#41522E"} : {color: "rgba(0, 0, 0, 0.32)"}} className="sort__down arrow is-bottom" onClick={sortByPriceInc}></div>
            </div>
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