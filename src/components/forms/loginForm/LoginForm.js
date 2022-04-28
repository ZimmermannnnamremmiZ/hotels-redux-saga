import { useSelector } from "react-redux";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import firebase from "firebase/compat";

import Button from '../../button/Button';
import './loginForm.scss'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <>
      <label className={error ? 'form__label red' : 'form__label'} htmlFor={props.name}>{label}</label>
      <input className={error ? 'form__input red' : 'form__input'} {...field} {...props} />
      {error ? (
        <div className="form__error">{meta.error}</div>
      ) : null}
    </>
  );
};

const LoginForm = () => {

  const {auth} = useSelector(store => store);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
      <Formik
      initialValues = {{
          email: '',
          password: ''
      }}
      validationSchema = {Yup.object({
          email: Yup.string()
                  .email('Неправильный email адрес')
                  .required('Обязательное поле!'),
          password: Yup.string()
                  .required('Введите пароль!')
                  .min(8, 'Не менее 8')
                  .matches(/^[^<\u0400-\u04FF>]+$/, 'Без кириллицы!'),
      })}
      onSubmit = {login}
      >
          <Form className="form">
              <h2 className='form__title'>Simple Hotel Check</h2>
              <div className='form__inputBox'>
                {/* <label className='form__label' htmlFor="login">Логин</label> */}
                <MyTextInput
                    label="Логин"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                />
                {/* <ErrorMessage component="div" className="form__error" name="email"/> */}
              </div>
              <div className='form__inputBox'>
                {/* <label className='form__label' htmlFor="password">Пароль</label> */}
                <MyTextInput
                    label="Пароль"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                />
                {/* <ErrorMessage component="div" className="form__error" name="password"/> */}
              </div>
              <Button inner={'Войти'}/>
          </Form>
      </Formik>
  )
}

export default LoginForm;