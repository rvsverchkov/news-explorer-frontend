import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function LoginPopup (props) {
    return (
        <PopupWithForm
            checkOpen={props.isOpen}
            title='Вход'
            method='POST'
        >
            
        </PopupWithForm>
    )
}

export default LoginPopup;