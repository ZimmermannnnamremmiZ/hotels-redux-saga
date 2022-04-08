import Input from '../inputs/Input';
import './loginForm.scss'

const LoginForm = () => {


  return(
    <form className='form'>
      <h3 className="form__title">Simple Hotel Check</h3>
      <Input type={'email'} name={'Login'}/>
      <Input type={'password'} name={'Password'}/>
    </form>
  )
}

export default LoginForm;