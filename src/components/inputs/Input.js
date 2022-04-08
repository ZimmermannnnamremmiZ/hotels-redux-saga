import './input.scss'

const Input = (props) => {
  return(
    <div className="inputBlock">
      <label className='inputBlock__label' for={props.name.toLowerCase()}>{props.name}</label>
      <input className='inputBlock__input' type={props.type} id={props.name.toLowerCase()}/>
    </div>
  )
}

export default Input;