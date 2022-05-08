import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/index";
import Hotels from "./pages/Hotels/index";
import useToken from "./components/useToken/useToken";

const App = () => {
  const { token, setToken } = useToken();

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token !== "fake-token-4-8-15-16-23-42" ? <Login setToken={setToken} /> : <Hotels setToken={setToken}/>}/>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
