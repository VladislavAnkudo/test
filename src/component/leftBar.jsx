import React, { useState, useRef } from 'react';

import author from '../assets/author.png'
import list1 from '../assets/icons/list1.svg'
import list2 from '../assets/icons/list2.svg'
import list3 from '../assets/icons/list3.svg'
import list4 from '../assets/icons/list4.svg'
import list5 from '../assets/icons/list5.svg'
import list6 from '../assets/icons/list6.svg'
import list7 from '../assets/icons/list7.svg'
import list8 from '../assets/icons/list8.svg'

function LeftBar() {

  
    return (
        <div className="left__side">
            <div className="left__side_first">
                <img src={author} alt="" />
                <div className='left__side_first_name'>Администратор <span>Булочка</span></div>
            </div>
            <div className='left__side_line'></div>
            <div className='left__side_list_title'>Главное</div>
            <ul className="left__side_list">
                <li className='left__side_list_item active'>
                    <img src={list1} alt="" />
                    Изменения
                </li>
                <li className='left__side_list_item'>
                    <img src={list2} alt="" />
                    Товары
                    <img src={list8} alt="" />
                </li>
                <li className='left__side_list_item'>
                    <img src={list3} alt="" />
                    Команда
                </li>
                <li className='left__side_list_item'>
                    <img src={list4} alt="" />
                    Города
                </li>
                <li className='left__side_list_item'>
                    <img src={list5} alt="" />
                    Магазины
                </li>
            </ul>
            <div className="left__side_second">
                <div className='left__side_second_title'>Профиль</div>
                <div className='left__side_second_title_name'>
                    <img src={list6} alt="" />
                    Настройки
                </div>
            </div>
            <div className="left__side_price">
                <div className="left__side_price_title">Цены!</div>
                <div className="left__side_price_subtitle">Создай или измени цены быстро и легко</div>
                <button className='left__side_price_button'>
                    <img src={list7} alt="" />
                    Редактировать
                </button>
            </div>
        </div>
    );
  }

export  {LeftBar};


