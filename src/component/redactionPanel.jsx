import React, { useState, useRef } from 'react';

import list7 from '../assets/icons/list7.svg'

function RedactionPanel() {

  
    return (
        <div className="right__side_first_block">
            <div className="first_block_title">Изменения</div>
            <button className='first_block_button'>
                <img src={list7} alt="" />
                <div className='first_block_button_line'></div>
                Добавить
            </button>
        </div>
    );
  }

export  {RedactionPanel};


