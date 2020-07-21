import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render () {
    return (
      <div className="demo-form">
        <div className="demo-form__wrapper">
          <div className="demo-form__heading">
            Отправить сообщение
          </div>
          <div className="demo-form__description">
            Анонимные собщения рассматриваются
          </div>
          <form className="form" action="">
            <div className="form__group">
              <input type="text" className="form__group__input" placeholder="Имя" />
              <div className="form__group__placeholder" data-placeholder="Имя">
              </div>
            </div>
            <div className="form__group">
              <input type="email" className="form__group__input" placeholder="Email"/>
              <div className="form__group__placeholder" data-placeholder="Email" data-error="Неверный формат">
              </div>
            </div>
            <div className="form__group">
              <input type="text" className="form__group__input" pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}" placeholder="Дата рождения"/>
              <div className="form__group__placeholder" data-placeholder="Дата рождения" data-error="Неверный формат">
              </div>
            </div>
            <div className="form__group form__group_full">
              <input type="text" className="form__group__input" placeholder="Сообщение"/>
              <div className="form__group__placeholder" data-placeholder="Сообщение">
              </div>
            </div>
            <div className="form__buttons">
              <button type="button" className="btn btn_clear">
                <span className="btn__label">Очистить <span className="mobile-visible">форму</span></span>
              </button>
              <button  type="button" className="btn btn_primary">
                <span className="btn__label">Отправить</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;