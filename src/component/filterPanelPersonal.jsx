import React, { useState, useRef } from 'react';

import calendar from '../assets/icons/calendar.svg'

function FilterPanelPersonal() {

  
    return (
        <div className="right__side_second_block">
            <div className="right__side_second_block_title">Фильтр</div>
            <div className='right__side_line'></div>
            <div className="right__side_second_block_date">
                
                <div className="right__side_second_block_first_filter">
                    <div className='right__side_second_block_first_filter_title'>Площадки</div>
                    <ul className="right__side_second_block_first_filter_checklist">
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="kraken" name="platforms[]" value="kraken" />
                            <label htmlFor="kraken" className="custom-checkbox">Кракен</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="mega" name="platforms[]" value="mega" />
                            <label htmlFor="mega" className="custom-checkbox">Мега</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="blacksprut" name="platforms[]" value="blacksprut" />
                            <label htmlFor="blacksprut" className="custom-checkbox">BlackSprut</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="omg" name="platforms[]" value="omg" />
                            <label htmlFor="omg" className="custom-checkbox">OMG!OMG!</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="own" name="platforms[]" value="own" />
                            <label htmlFor="own" className="custom-checkbox">Собственный магазин</label>
                        </li>
                    </ul>
                </div>
                <div className='right__side_line_second'></div>
                <div className="right__side_second_block_first_filter">
                    <div className='right__side_second_block_first_filter_title'>Магазин</div>
                    <ul className="right__side_second_block_first_filter_checklist">
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="kraken" name="shop[]" value="kraken" />
                            <label htmlFor="kraken" className="custom-checkbox">Link</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="mega" name="shop[]" value="mega" />
                            <label htmlFor="mega" className="custom-checkbox">Астрал</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="blacksprut" name="shop[]" value="blacksprut" />
                            <label htmlFor="blacksprut" className="custom-checkbox">КотикиНаркотики</label>
                        </li>
                        <li className='right__side_second_block_first_filter_checklist_item'>
                            <input type="checkbox" id="omg" name="shop[]" value="omg" />
                            <label htmlFor="omg" className="custom-checkbox">Астрал собственный</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }

export  {FilterPanelPersonal};


