import './input.scss';

const Input = (props) => {
  const {name, type, defaultValue, handleSearchData, stateKey} = props;

  return(
    <div className="inputBlock">
      <label className='inputBlock__label' htmlFor={name.toLowerCase()}>{name}</label>
      <input className='inputBlock__input' type={type}
                                           id={name.toLowerCase()}
                                           defaultValue={defaultValue}
                                           onChange={(e) => handleSearchData(stateKey, e.target.value)}/>
    </div>
  )
}

export default Input;