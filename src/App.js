import { useSelector, useDispatch } from "react-redux";

import FindHotelsForm from "./components/forms/findHotelsForm/FindHotelsForm";
import HotelsList from "./components/hotelsList/HotelsList";
import LoginForm from "./components/forms/loginForm/LoginForm";

// increaseCount, decreaseCount,


const App = () => {

  return(
    <div className="container">
      {/* <LoginForm /> */}
      <FindHotelsForm />
      <div className="hotelsBlock">
        <HotelsList />
      </div>
    </div>
  );
};

export default App;
