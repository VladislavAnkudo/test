import React from 'react';

import {Header} from '../component/header';
import {LeftBar} from '../component/leftBar';
import {RedactionPanel} from '../component/redactionPanel';


import arrow_down_black from '../assets/icons/arrow_down_black.svg'
import list7 from '../assets/icons/list7.svg'
import product_one from '../assets/product_one.png'

function ShopCatElement() {
   
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
                                    <div className='wrapper_shop_title_filter'>
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
                                    </div>
                                    <div className='wrapper__elements_cat'>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
                                        </div>
                                        <div className="wrapper__element_cat_one">
                                            <img src={product_one} alt="" className='wrapper__element_cat_one_img'/>
                                            <div className='element_cat_one_title'>Шишки АК Kush</div>
                                            <button className='element_cat_one_title_button'>
                                                <img src={list7} alt="" />
                                                Редактировать
                                            </button>
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

export  {ShopCatElement};