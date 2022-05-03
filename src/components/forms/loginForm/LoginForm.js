import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';

import Button from '../../button/Button';
import './loginForm.scss'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <>
      <label className={error ? 'form__label red' : 'form__label'} htmlFor={props.name}>{label}</label>
      <input className={error ? 'form__input red' : 'form__input'} {...field} {...props} />
      {error ? <div className="form__error">{meta.error}</div> : null}
    </>
  );
};

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const LoginForm = ({setToken}) => {

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
      onSubmit={async values => {
          const token = await loginUser(
            values.email,
            values.password
          );
          setToken(token);
      }}
      >
        {({values, handleSubmit}) => (<Form className="form" onSubmit = {handleSubmit}>
              <h2 className='form__title'>Simple Hotel Check</h2>
              <div className='form__inputBox'>
                <MyTextInput
                    label="Логин"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={values.email}
                />
              </div>
              <div className='form__inputBox'>
                <MyTextInput
                    label="Пароль"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value={values.password}
                />
              </div>
              <Button type="submit" inner={'Войти'}/>
          </Form>
        )}
      </Formik>
  )
}

export default LoginForm;