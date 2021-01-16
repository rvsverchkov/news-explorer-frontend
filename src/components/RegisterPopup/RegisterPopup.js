import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function RegisterPopup (props) {
    return (
        <PopupWithForm
            checkOpen={props.isOpen}
            disable='true'
            title='Регистрация'
            closePopup={props.onClose}
            submit='Зарегистрироваться'
            anotherAction='Войти'
            onAnotherAction={props.onLoginPopup}
        >
            <p className='popup__input-title'>Email</p>
            <input
                name='email'
                type='text'
                placeholder='Введите почту'
                className='popup__input'
                id='email-register'
                minLength='2'
                maxLength='40'
            />
            <p className='popup__input-title'>Пароль</p>
            <input
                name='password'
                type='password'
                placeholder='Введите пароль'
                className='popup__input'
                id='password-register'
                minLength='2'
                maxLength='40'
            />
            <p className='popup__input-title'>Имя</p>
            <input
                name='name'
                type='text'
                placeholder='Введите ваше имя'
                className='popup__input'
                id='name-register'
                minLength='2'
                maxLength='40'
            />
        </PopupWithForm>
    )
}

export default RegisterPopup;