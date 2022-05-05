import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import FindHotelsForm from "../../components/forms/findHotelsForm/FindHotelsForm";
import Favorite from "../../components/favorite/Favorite";
import HotelsList from "../../components/hotelsList/HotelsList";
import Header from '../../components/header/Header';
import "./hotels.scss"

const Hotels = ({setToken}) => {

    const [formVisible, setFormVisible] = useState()
    const [favVisible, setFavVisible] = useState()


    const isTablet = useMediaQuery({ minWidth: 768})

    useEffect(() => {
        function handleResize() {
          return isTablet ? setFormVisible('visible') : setFormVisible('hidden')
        }

        window.addEventListener('resize', handleResize)
      })



    return(
        <div className="hotels">
            <Header setToken={setToken}/>
            <div className="container">
                <div className="tablet">
                        <button className="tablet__form-btn" onClick={() => setFormVisible('visible')}/>
                        <button className="tablet__fav-btn" onClick={() => setFavVisible('visible')}/>
                </div>
                <div className="left-block flex-col">
                    <div className="form-block" style={{visibility: formVisible}}>
                        <button className="close" onClick={() => setFormVisible('hidden')} />
                        <FindHotelsForm />
                    </div>
                    <div className="favorite-block" style={{visibility: favVisible}}>
                        <button className="close" onClick={() => setFavVisible('hidden')} />
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