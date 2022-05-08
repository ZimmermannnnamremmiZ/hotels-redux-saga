import { useEffect, useState } from "react";

import FindHotelsForm from "../../components/forms/findHotelsForm/FindHotelsForm";
import Favorite from "../../components/favorite/Favorite";
import HotelsList from "../../components/hotelsList/HotelsList";
import Header from '../../components/header/Header';
import "./hotels.scss"

const Hotels = ({setToken}) => {

    const [formActive, setFormActive] = useState()
    const [favActive, setFavActive] = useState()

    // сделал так, чтобы после закрытия модальных окон на крестик, при дальнейшем увеличении разрешения экрана ползунком, они снова отображались
    useEffect(() => {

        function handleResize() {
            if (window.screen.width <= 768) {
                setFormActive(false);
                setFavActive(false)
            } else {
                setFormActive(true);
                setFavActive(true)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, [])



    return(
        <div className="hotels">
            <Header setToken={setToken}/>
            <div className="container">
                <div className="tablet">
                        <button className="tablet__form-btn" onClick={() => setFormActive(true)}/>
                        <button className="tablet__fav-btn" onClick={() => setFavActive(true)}/>
                </div>
                <div className="left-block flex-col">
                    <div className={formActive ? `form-block form-block--active` : "form-block"}  >
                        <button className="close" onClick={() => setFormActive(false)} />
                        <FindHotelsForm />
                    </div>
                    <div className={favActive ? `favorite-block favorite-block--active` : "favorite-block"}   >
                        <button className="close" onClick={() => setFavActive(false)} />
                        <Favorite />
                    </div>
                </div>
                <div className="hotelsBlock">
                    <HotelsList />
                </div>
            </div>
        </div>
    )
}

export default Hotels;