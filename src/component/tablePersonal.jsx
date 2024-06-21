import React, { useState, useRef } from 'react';

import more_vertical from '../assets/icons/more_vertical.svg'
import arrow_left from '../assets/icons/arrow_left.svg'
import arrow_right from '../assets/icons/arrow_right.svg'
import item_shop from '../assets/item_shop.png'
import personal1 from '../assets/personal1.png'

function TablePersonal() {

  
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Сотрудник</th>
                    <th>Роль</th>
                    <th>Контакты</th>
                    <th>Площадка</th>
                    <th>Магазин</th>

                    
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Булочка</div>
                    </td>
                    <td><div className='add'>Администратор</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td></td>
                    <td></td>
                    <td><img src={more_vertical} alt="" /></td>

                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Мужик</div>
                    </td>
                    <td><div className='redac'>Регулятор цен</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td></td>
                    <td></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>skittles</div>
                    </td>
                    <td><div className='sup'>Саппорт</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td>Кракен</td>
                    <td>Link</td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Булочка</div>
                    </td>
                    <td><div className='add'>Администратор</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td></td>
                    <td></td>
                    <td><img src={more_vertical} alt="" /></td>

                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Мужик</div>
                    </td>
                    <td><div className='redac'>Регулятор цен</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td></td>
                    <td></td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>skittles</div>
                    </td>
                    <td><div className='sup'>Саппорт</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td>Кракен</td>
                    <td>Link</td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Булочка</div>
                    </td>
                    <td><div className='add'>Администратор</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td></td>
                    <td></td>
                    <td><img src={more_vertical} alt="" /></td>

                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Мужик</div>
                    </td>
                    <td><div className='redac'>Регулятор цен</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td>ОМГ!ОМГ!</td>
                    <td>Astral</td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>skittles</div>
                    </td>
                    <td><div className='sup'>Саппорт</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td>Кракен</td>
                    <td>Link</td>
                    <td><img src={more_vertical} alt="" /></td>
                </tr>
                <tr>
                    <td className='right__side_third_block_table_name_row'>
                        <img src={personal1} alt="" />
                        <div className='right__side_third_block_name_item'>Булочка</div>
                    </td>
                    <td><div className='add'>Администратор</div></td>
                    <td>@bulochka:deep.fo</td>
                    <td>БлексСпрут</td>
                    <td>КотикиНаркотики</td>
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

export  {TablePersonal};


