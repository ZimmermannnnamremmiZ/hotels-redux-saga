import { useSelector, useDispatch } from "react-redux";
import { getLocation, getHotels } from "./redux/actions/actionCreator";

import FindHotelsForm from "./components/forms/findHotelsForm/FindHotelsForm";
// import Button from "./components/button/Button";
import heart from './components/svg/heart/img/heart.svg';
import LoginForm from "./components/forms/loginForm/LoginForm";

// increaseCount, decreaseCount,


const App = () => {
  const dispatch = useDispatch();

  const handleLocation = () => {
    dispatch(getLocation());
    // dispatch(getHotels())
  };

  return(
    <div className="container">
      {/* <LoginForm /> */}
      <FindHotelsForm />
      <button onClick={handleLocation}>Get Hotels</button>
    </div>
  );
};

export default App;
