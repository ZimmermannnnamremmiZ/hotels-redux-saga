import './header.scss'

const Header = () => {

  return(
    <header className="header">
      <div className="header__box flex-row">
        <a className="logo" href="#">Simple Hotel Check</a>
        <a className="header__logout" href="#">Выйти</a>
      </div>
    </header>
  )
}

export default Header