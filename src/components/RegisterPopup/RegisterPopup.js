import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    email: '',
    password: '',
    name: ''
}

const validateOnMount = true;

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Неправильный формат email')
        .required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
    name: Yup.string().required('Обязательное поле')
})

function RegisterPopup (props) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount
    })

    return (
        <PopupWithForm
            checkOpen={props.isOpen}
            disable='true'
            title='Регистрация'
            handleSubmit={props.handleLoggedInClick}
            closePopup={props.onClose}
            isValid={!formik.isValid}
            submit='Зарегистрироваться'
            anotherAction='Войти'
            onAnotherAction={props.onLoginPopup}
        >
            <p className='popup__input-title'>Email</p>
            <input
                name='email'
                type='email'
                placeholder='Введите почту'
                className={`popup__input ${formik.touched.email && formik.errors.email ? 'popup__input-error' : ''}`}
                id='email-register'
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
                id='password-register'
                minLength='2'
                maxLength='40'
                { ... formik.getFieldProps('password') }
                required
            />
            {formik.touched.password && formik.errors.password ? <span className='popup__input-message'>{formik.errors.password}</span> : null}
            <p className='popup__input-title'>Имя</p>
            <input
                name='name'
                type='text'
                placeholder='Введите ваше имя'
                className={`popup__input ${formik.touched.name && formik.errors.name ? 'popup__input-error' : ''}`}
                id='name-register'
                minLength='2'
                maxLength='40'
                { ... formik.getFieldProps('name') }
                required
            />
            {formik.touched.name && formik.errors.name ? <span className='popup__input-message'>{formik.errors.name}</span> : null}
        </PopupWithForm>
    )
}

export default RegisterPopup;