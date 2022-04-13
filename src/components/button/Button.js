import './button.scss'

const Button = ({inner, onClicked}) => {
  return(
    <button className='button' onClick={onClicked}>{inner}</button>
  )
}

export default Button;