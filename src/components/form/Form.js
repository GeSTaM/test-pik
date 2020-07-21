import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      birthday: '',
      message: ''
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
    this.formdata = 'Name: ' + this.state.username + ' Email: ' + this.state.email + ' Birthday: ' + this.state.birthday + ' Message: ' + this.state.message;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.formdata);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.length >= 1;
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'message':
        messageValid = value.length >= 1;
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
      emailValid: emailValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.usernameValid && this.state.messageValid});
  }

  clearForm = () => {
    this.setState({
      username: '',
      email: '',
      birthday: '',
      message: ''
    });
  }


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
          <form className="form" action="" onSubmit={this.viewResult}>
            <div className="form__group">
              <input type="text" className="form__group__input" placeholder="Имя" name="username" value={this.state.username} onChange={this.handleUserInput}/>
              <div className="form__group__placeholder" data-placeholder="Имя">
              </div>
            </div>
            <div className="form__group">
              <input type="email" className="form__group__input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
              <div className="form__group__placeholder" data-placeholder="Email" data-error="Неверный формат">
              </div>
            </div>
            <div className="form__group">
              <input type="text" className="form__group__input" pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}" placeholder="Дата рождения" name="birthday" value={this.state.birthday} onChange={this.handleUserInput} />
              <div className="form__group__placeholder" data-placeholder="Дата рождения" data-error="Неверный формат">
              </div>
            </div>
            <div className="form__group form__group_full">
              <input type="text" className="form__group__input" placeholder="Сообщение" name="message" value={this.state.message} onChange={this.handleUserInput}/>
              <div className="form__group__placeholder" data-placeholder="Сообщение">
              </div>
            </div>
            <div className="form__buttons">
              <button className="btn btn_clear" onClick={this.clearForm}>
                <span className="btn__label">Очистить <span className="mobile-visible">форму</span></span>
              </button>
              <button  onClick={this.handleSubmit} className="btn btn_primary" disabled={!this.state.formValid}>
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