import { Link } from "react-router-dom";
import './header.scss'

const Header = ({setToken}) => {

  return(
    <header className="header">
      <div className="header__box flex-row">
        <Link to="/" className="logo">Simple Hotel Check</Link>
        <Link to="/" className="header__logout" onClick={() => setToken(null)}>Выйти</Link>
      </div>
    </header>
  )
}

export default Header