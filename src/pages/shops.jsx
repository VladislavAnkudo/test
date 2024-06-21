import React from 'react';

import {Header} from '../component/header';
import {LeftBar} from '../component/leftBar';
import {RedactionPanel} from '../component/redactionPanel';

import red_minus from '../assets/icons/red_minus.svg'

function Shops() {
   
    return (
      <div>
           <Header/>
            <main className='main'>
                <div className="container">
                    <div className='main__second_wrapper'>
                        <LeftBar/>
                        <div className='right__side'>
                            <RedactionPanel/>
                            <div className='right__side_wrapper_two_blocks'>
                                <div className='right__side_third_block'>
                                  {/*   <div className='wrapper_shop_title_filter'>
                                        <div className='shop_cat_title'>Марихуана</div>
                                        <div className='wrapper_filter_shop'>
                                            <div className="shop_filter_first">
                                                <div className="shop_filter_first_title">Площадка</div>
                                                <div className="shop_filter_first_line"></div>
                                                <div className="shop_filter_first_title">kraken</div>
                                                <img src={arrow_down_black} alt="" />
                                            </div>
                                            <div className="shop_filter_first">
                                                <div className="shop_filter_first_title">Площадка</div>
                                                <div className="shop_filter_first_line"></div>
                                                <div className="shop_filter_first_title">kraken</div>
                                                <img src={arrow_down_black} alt="" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="wrapper_shops">
                                        <div className="shop_element">
                                            <div className="shop_element_title">Кракен</div>
                                            <div className="shop_element_line"></div>
                                            <div className="wrapper_button_shop">
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    Link
                                                </button>
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    КотикиНаркотики
                                                </button>
                                            </div>
                                        </div>
                                        <div className="shop_element">
                                            <div className="shop_element_title">Mega</div>
                                            <div className="shop_element_line"></div>
                                            <div className="wrapper_button_shop">
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    Link
                                                </button>
                                            </div>
                                        </div>
                                        <div className="shop_element">
                                            <div className="shop_element_title">BlackSprut</div>
                                            <div className="shop_element_line"></div>
                                            <div className="wrapper_button_shop">
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    Astral
                                                </button>
                                            </div>
                                        </div>
                                        <div className="shop_element">
                                            <div className="shop_element_title">Omg!Omg!</div>
                                            <div className="shop_element_line"></div>
                                            <div className="wrapper_button_shop">
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    КотикиНаркотики
                                                </button>
                                            </div>
                                        </div>
                                        <div className="shop_element">
                                            <div className="shop_element_title">Собственный магазин</div>
                                            <div className="shop_element_line"></div>
                                            <div className="wrapper_button_shop">
                                                <button className='shop_element_button'>
                                                    <img src={red_minus} alt="" />
                                                    <div className="shop_element_button_line"></div>
                                                    Astral
                                                </button>
                                            </div>
                                        </div>
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

export  {Shops};