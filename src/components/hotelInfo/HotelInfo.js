import './hotelInfo.scss'

const HotelInfo = ({name, checkIn, days, price}) => {

    return(
        <div className="hotelItem">
            <div className="hotelItem__leftSide">
                <h5 className="hotelItem__name">{name}</h5>
                    <div className="flex">
                        <p className="hotelItem__date">{checkIn}</p>
                        <span></span>
                        <p className="hotelItem__days">{days}</p>
                    </div>
            </div>
            <div className="hotelItem__rightSide">
                <img className="hotelItem__heart" src="" alt="" />
                <p className="hotelItem__price">{Math.ceil(price).toLocaleString()} ₽</p>
            </div>
        </div>
    )
}

export default HotelInfo;