import { useSelector, useDispatch } from "react-redux";
import {  getHotels } from "./redux/actions/actionCreator";

import Button from "./components/button/Button";
import heart from './components/svg/heart/img/heart.svg';
// increaseCount, decreaseCount,


const App = () => {
  const dispatch = useDispatch();

  const handleHotels = () => {
    dispatch(getHotels());
  };

  return(
    <div className="container">
      <img src={heart} alt="favorite" />
      <Button inner={'Войти'}/>
      <button onClick={handleHotels}>Get Hotels</button>
    </div>
  );
};

export default App;
