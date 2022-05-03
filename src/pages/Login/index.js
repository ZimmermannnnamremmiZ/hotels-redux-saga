
import LoginForm from "../../components/forms/loginForm/LoginForm";
import './login.scss'

const Login = ({setToken}) => {
    return(
        <div className="login">
            <div className="container">
                <LoginForm setToken={setToken}/>
            </div>
        </div>
    )
}

export default Login;