import FindHotelsForm from "../../components/forms/findHotelsForm/FindHotelsForm";
import Favorite from "../../components/favorite/Favorite";
import HotelsList from "../../components/hotelsList/HotelsList";

const Hotels = () => {

    return(
        <div className="container">
            <div className="left-block flex-col">
                <FindHotelsForm />
                <Favorite />
            </div>
            <div className="hotelsBlock">
                <HotelsList />
            </div>
        </div>
    )
}

export default Hotels;