import React from 'react';
import logo from '../assets/icons/logo.svg'
import what__redaction from '../assets/icons/what__redaction.svg'
import search from '../assets/icons/search.svg'
import logout from '../assets/icons/logout.svg'
import author from '../assets/author.png'
import item_shop from '../assets/item_shop.png'
import list1 from '../assets/icons/list1.svg'
import list2 from '../assets/icons/list2.svg'
import list3 from '../assets/icons/list3.svg'
import list4 from '../assets/icons/list4.svg'
import list5 from '../assets/icons/list5.svg'
import list6 from '../assets/icons/list6.svg'
import list7 from '../assets/icons/list7.svg'
import list8 from '../assets/icons/list8.svg'
import calendar from '../assets/icons/calendar.svg'
import more_vertical from '../assets/icons/more_vertical.svg'
import arrow_left from '../assets/icons/arrow_left.svg'
import arrow_right from '../assets/icons/arrow_right.svg'


function Redaction() {
   
    return (
      <div>
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
            <main className='main'>
                <div className="container">
                    <div className='main__second_wrapper'>
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
                        <div className='right__side'>
                            <div className="right__side_first_block">
                                <div className="first_block_title">Изменения</div>
                                <button className='first_block_button'>
                                    <img src={list7} alt="" />
                                    <div className='first_block_button_line'></div>
                                    Добавить
                                </button>
                            </div>
                            <div className='right__side_wrapper_two_blocks'>
                                <div className="right__side_second_block">
                                    <div className="right__side_second_block_title">Фильтр</div>
                                    <div className='right__side_line'></div>
                                    <div className="right__side_second_block_date">
                                        <div className="right__side_second_block_date_title">Дата</div>
                                        <div className='right__side_second_block_date_two'>
                                            <div className='right__side_second_block_date_one'>
                                                <img src={calendar} alt="" />
                                                <div className="right__side_second_block_date_one_line"></div>
                                                15/05/24
                                            </div>
                                            <div className='right__side_second_block_date_one'>
                                                <img src={calendar} alt="" />
                                                <div className="right__side_second_block_date_one_line"></div>
                                                15/05/24
                                            </div>
                                        </div>
                                        <div className='right__side_line_second'></div>
                                        <div className="right__side_second_block_first_filter">
                                            <div className='right__side_second_block_first_filter_title'>Площадки</div>
                                            <ul class="right__side_second_block_first_filter_checklist">
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="kraken" name="platforms[]" value="kraken" />
                                                    <label for="kraken" class="custom-checkbox">Кракен</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="mega" name="platforms[]" value="mega" />
                                                    <label for="mega" class="custom-checkbox">Мега</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="blacksprut" name="platforms[]" value="blacksprut" />
                                                    <label for="blacksprut" class="custom-checkbox">BlackSprut</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="omg" name="platforms[]" value="omg" />
                                                    <label for="omg" class="custom-checkbox">OMG!OMG!</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="own" name="platforms[]" value="own" />
                                                    <label for="own" class="custom-checkbox">Собственный магазин</label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="right__side_second_block_first_filter">
                                            <div className='right__side_second_block_first_filter_title'>Магазин</div>
                                            <ul class="right__side_second_block_first_filter_checklist">
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="kraken" name="shop[]" value="kraken" />
                                                    <label for="kraken" class="custom-checkbox">Link</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="mega" name="shop[]" value="mega" />
                                                    <label for="mega" class="custom-checkbox">Астрал</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="blacksprut" name="shop[]" value="blacksprut" />
                                                    <label for="blacksprut" class="custom-checkbox">КотикиНаркотики</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="omg" name="shop[]" value="omg" />
                                                    <label for="omg" class="custom-checkbox">Астрал собственный</label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="right__side_second_block_first_filter">
                                            <div className='right__side_second_block_first_filter_title'>Категория события</div>
                                            <ul class="right__side_second_block_first_filter_checklist">
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="kraken" name="catEvents[]" value="kraken" />
                                                    <label for="kraken" class="custom-checkbox">Новый товар</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="mega" name="catEvents[]" value="mega" />
                                                    <label for="mega" class="custom-checkbox">Изменение цены</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="blacksprut" name="catEvents[]" value="blacksprut" />
                                                    <label for="blacksprut" class="custom-checkbox">Новый город</label>
                                                </li>
                                                <li className='right__side_second_block_first_filter_checklist_item'>
                                                    <input type="checkbox" id="omg" name="catEvents[]" value="omg" />
                                                    <label for="omg" class="custom-checkbox">Новая фасовка</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='right__side_third_block'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>
      </div>
    );
  }

export  {Redaction};


