import React, { useState, useRef } from 'react';
import {Container, Form, Card, Button, InputGroup } from 'react-bootstrap'

import logo from '../assets/icons/logo.svg'
import username_icon from '../assets/icons/username_icon.svg'
import password_icon from '../assets/icons/password_icon.svg'
import animal__auth from '../assets/animal__auth.png' 

function Authorization() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showText, setShowText] = useState(false);

    const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  
    const handleInputChange = (event, index) => {
      let inputValue = event.target.value.slice(0, 1);
    
      setInputValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = inputValue;
        return newValues;
      });
    
      // Переходим к следующему инпуту
      if (index < inputRefs.length - 1 && inputValue !== '') {
        inputRefs[index + 1].current.focus();
      }
    };

    const handleLogin = () => {
      
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      
    
      setShowText(true);
    };
  
    return (
      <div>
        <Container className="container__auth">
          <div className='test'>
            <div className='wrapper__text-img'>
              <Card className="card__auth-form">
                <div className='authorization__logo-title'>
                  <img src={logo} alt="logo" />
                </div>
                <div className='authorization__logo-title-second'>
                  Привет!
                </div>
                <Form className="form__auth">
                  <InputGroup className="input-group-auth">
                    <InputGroup.Text className="form-control-input-password-svg">
                      <img src={username_icon} alt="" />
                    </InputGroup.Text>
                    <div className='input-line'></div>
                    <Form.Control
                      placeholder="Имя пользователя"
                      className='form-control-input'
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
  
                  <InputGroup className="input-group-auth">
                    <InputGroup.Text className="form-control-input-password-svg">
                      <img src={password_icon} alt="" />
                    </InputGroup.Text>
                    <div className='input-line'></div>
                    <Form.Control
                      placeholder="Пароль"
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control-input"
                    />
                  </InputGroup>
                  <Button className='authorization__btn' onClick={handleLogin}>
                    Войти
                  </Button>
                  {showText && (
                    <div className='hidden__wrap'>
                    <div className='fa-line__text'>
                        <div className='fa-line'></div>
                        <div className='text-line'>Двухфакторная аутентификация</div>
                        <div className='fa-line'></div>
                    </div>
                    <InputGroup className="fa-inputs">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <React.Fragment key={index}>
                          <Form.Control
                            type="number"
                            className="form-control-input-number"
                            placeholder='_'
                            value={inputValues[index]}
                            onChange={(event) => handleInputChange(event, index)}
                            ref={inputRefs[index]}
                          />
                          
                        </React.Fragment>
                      ))}
                    </InputGroup>
                    <Button className='authorization__btn' onClick={handleLogin}>
                    Проверить
                    </Button>
                    </div>  
                  )}
                </Form>
              </Card>
              <div>
                <img src={animal__auth} alt="logo" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

export  {Authorization};


