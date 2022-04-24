import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/Header";
import FindHotelsForm from "./components/forms/findHotelsForm/FindHotelsForm";
import HotelsList from "./components/hotelsList/HotelsList";
import LoginForm from "./components/forms/loginForm/LoginForm";
import Favorite from "./components/favorite/Favorite";


// increaseCount, decreaseCount,


const App = () => {

  return(
    <>
    <Header />
    <div className="container">
      <div className="left-block flex-col">
        <FindHotelsForm />
        <Favorite />
      </div>
      {/* <LoginForm /> */}

      <div className="hotelsBlock">
        <HotelsList />
      </div>
    </div>
    </>
  );

};

export default App;
