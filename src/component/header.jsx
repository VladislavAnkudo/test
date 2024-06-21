import React, { useState, useRef } from 'react';

import logo from '../assets/icons/logo.svg'
import what__redaction from '../assets/icons/what__redaction.svg'
import search from '../assets/icons/search.svg'
import logout from '../assets/icons/logout.svg'

function Header() {

  
    return (
        <header className='header'>
                <div className="container">
                    <div className="second__wrapper">
                        <div className="wrapper__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="wrapper__inforamation">
                            <div className="what__redaction">
                                <img src={what__redaction} alt="" />
                                <div className='what__redaction_line'></div>
                                <div>2 изменение сегодня</div>
                            </div>
                            <div className='what__redaction_date'><span>17 июня</span> 2024</div>
                            <div className='what__redaction_search'>
                                <img src={search} alt="" />
                                <div className="what__redaction_search_line"></div>
                                <input type="text" placeholder='Поиск'/>
                            </div>
                            <button className='what__redaction_button'>
                                <img src={logout} alt="" />
                                <div className="what__redaction_button_line"></div>
                                Выйти
                            </button>
                        </div>
                    </div>
                </div>
        </header>
    );
  }

export  {Header};


