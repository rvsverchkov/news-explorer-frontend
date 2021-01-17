import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    password: ''
}

const validateOnMount = true;

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Неправильный формат email')
        .required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле')
})

function LoginPopup (props) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount
    })

    return (
        <PopupWithForm
            checkOpen={props.isOpen}
            title='Вход'
            handleSubmit={props.handleLoggedInClick}
            closePopup={props.onClose}
            isValid={!formik.isValid}
            submit='Войти'
            anotherAction='Зарегистрироваться'
            onAnotherAction={props.onRegisterPopup}
        >
            <p className='popup__input-title'>Email</p>
            <input
                name='email'
                type='email'
                placeholder='Введите почту'
                className={`popup__input ${formik.touched.email && formik.errors.email ? 'popup__input-error' : ''}`}
                id='email-login'
                minLength='2'
                maxLength='40'
                { ... formik.getFieldProps('email') }
                required
            />
            {formik.touched.email && formik.errors.email ? <span className='popup__input-message'>{formik.errors.email}</span> : null}
            <p className='popup__input-title'>Пароль</p>
            <input
                name='password'
                type='password'
                placeholder='Введите пароль'
                className={`popup__input ${formik.touched.password && formik.errors.password ? 'popup__input-error' : ''}`}
                id='password-login'
                minLength='2'
                maxLength='40'
                { ... formik.getFieldProps('password') }
                required
            />
            {formik.touched.password && formik.errors.password ? <span className='popup__input-message'>{formik.errors.password}</span> : null}
        </PopupWithForm>
    )
}

export default LoginPopup;