import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.checkOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <button type='button' onClick={props.closePopup} className={`popup__close popup__${props.close}`} />
                <h3 className='popup__edit-title'>{props.title}</h3>
                <form name={`${props.name}`} method={`${props.method}`} onSubmit={props.submitForm} action='/' className='popup__form' noValidate>
                    {props.children}
                    <button type='sumbit' className='popup__save'>{props.submit}</button>
                </form>
                <div className='popup__subtitle-container'>
                    <p className='popup__subtitle'>или <button className='popup__register-button' onClick={props.onRegister}>{props.anotherAction}</button></p>
                </div>
            </div>
        </section>
    )
}

export default PopupWithForm;