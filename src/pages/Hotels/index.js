import FindHotelsForm from "../../components/forms/findHotelsForm/FindHotelsForm";
import Favorite from "../../components/favorite/Favorite";
import HotelsList from "../../components/hotelsList/HotelsList";
import Header from '../../components/header/Header'
import "./hotels.scss"

const Hotels = ({setToken}) => {

    return(
        <div className="hotels">
            <Header setToken={setToken}/>
            <div className="container">
                <div className="left-block flex-col">
                    <FindHotelsForm />
                    <Favorite />
                </div>
                <div className="hotelsBlock">
                    <HotelsList />
                </div>
            </div>
        </div>
    )
}

export default Hotels;