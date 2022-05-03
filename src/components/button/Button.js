import './button.scss'

const Button = ({inner, onClicked, type}) => {
  return(
    <button className='button' type={type} onClick={onClicked}>{inner}</button>
  )
}

export default Button;