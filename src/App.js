import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/navigation/AppRouter";

const App = () => {
  return(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );

};

export default App;
