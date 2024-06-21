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
                <div className='right__side_line_second'></div>
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
            </div>
        </div>
    );
  }

export  {FilterPanelPersonal};


