import React, { useState, useRef } from 'react';

import more_vertical from '../assets/icons/more_vertical.svg'
import arrow_left from '../assets/icons/arrow_left.svg'
import arrow_right from '../assets/icons/arrow_right.svg'
import item_shop from '../assets/item_shop.png'

function TableElement() {

  
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Товар</th>
                    <th>Категория события</th>
                    <th>Редактор</th>
                    <th>Площадка</th>
                    <th>Магазин</th>
                    <th>Статус</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Шишки <br/><span>White Widow</span></div>
                    </td>
                    <td>Изменение цены</td>
                    <td>Skittles</td>
                    <td>Kraken</td>
                    <td>Astral</td>
                    <td><div className='redac'>Изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>Link</td>
                    <td><div className='add'>Добавлен</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>КотрикиНаркотики</td>
                    <td><div className='no_redac'>Не изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Шишки <br/><span>White Widow</span></div>
                    </td>
                    <td>Изменение цены</td>
                    <td>Skittles</td>
                    <td>Kraken</td>
                    <td>Astral</td>
                    <td><div className='redac'>Изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>Link</td>
                    <td><div className='add'>Добавлен</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>КотрикиНаркотики</td>
                    <td><div className='no_redac'>Не изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Шишки <br/><span>White Widow</span></div>
                    </td>
                    <td>Изменение цены</td>
                    <td>Skittles</td>
                    <td>Kraken</td>
                    <td>Astral</td>
                    <td><div className='redac'>Изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>Link</td>
                    <td><div className='add'>Добавлен</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Эйфоретик <br/><span>Мефедрон Кристаллы</span></div>
                    </td>
                    <td>Новый товар</td>
                    <td>Булочка</td>
                    <td>Mega</td>
                    <td>КотрикиНаркотики</td>
                    <td><div className='no_redac'>Не изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td>20/05/24</td>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={item_shop} alt="" />
                        <div className='right__side_third_block_name_item'>Шишки <br/><span>White Widow</span></div>
                    </td>
                    <td>Изменение цены</td>
                    <td>Skittles</td>
                    <td>Kraken</td>
                    <td>Astral</td>
                    <td><div className='redac'>Изменено</div></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                
                </tbody>
            </table>
            <div className='wrapper_switch_buttons'>
                <button className='switch_button'>
                    <img src={arrow_left} alt="" />
                    Назад
                </button>
                <div className='wrapper__pages'>
                    <div className='pages__page'>1</div>
                    <div className='pages__page'>2</div>
                </div>
                <button className='switch_button'>
                    Вперёд
                    <img src={arrow_right} alt="" />
                </button>
            </div>
        </div>
    );
  }

export  {TableElement};


