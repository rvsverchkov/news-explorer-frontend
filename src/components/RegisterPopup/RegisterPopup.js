import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function RegisterPopup (props) {
    return (
        <PopupWithForm
            checkOpen={props.isOpen}
            title='Вход'
            closePopup={props.onClose}
            submit='Войти'
            anotherAction='Войти'
        >
            <p className='popup__input-title'>Email</p>
            <input
                name='email'
                type='text'
                placeholder='Введите почту'
                className='popup__input'
                id='email-input'
                minLength='2'
                maxLength='40'
            />
            <p className='popup__input-title'>Пароль</p>
            <input
                name='password'
                type='password'
                placeholder='Введите пароль'
                className='popup__input'
                id='email-input'
                minLength='2'
                maxLength='40'
            />
        </PopupWithForm>
    )
}

export default RegisterPopup;