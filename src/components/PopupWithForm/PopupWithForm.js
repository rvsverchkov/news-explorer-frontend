import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.checkOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container'>
                <button type='button' onClick={props.closePopup} className={`popup__close popup__${props.close}`} />
                <h3 className='popup__edit-title'>{props.title}</h3>
                <form name={`${props.name}`} method={`${props.method}`} action='/' className='popup__form' onSubmit={props.handleSubmit} noValidate>
                    {props.children}
                    <button type='sumbit' disabled={props.isValid} className={`${props.isValid ? 'popup__save-disable' : 'popup__save'}`}>{props.submit}</button>
                </form>
                <div className='popup__subtitle-container'>
                    <p className='popup__subtitle'>или<button className='popup__button' onClick={props.onAnotherAction}>{props.anotherAction}</button></p>
                </div>
            </div>
        </section>
    )
}

export default PopupWithForm;