import { useSelector, useDispatch } from "react-redux";

import FindHotelsForm from "./components/forms/findHotelsForm/FindHotelsForm";
import HotelsList from "./components/hotelsList/HotelsList";
import heart from './components/svg/heart/img/heart.svg';
import LoginForm from "./components/forms/loginForm/LoginForm";

// increaseCount, decreaseCount,


const App = () => {

  return(
    <div className="container">
      {/* <LoginForm /> */}
      <FindHotelsForm />
      <HotelsList />
    </div>
  );
};

export default App;
