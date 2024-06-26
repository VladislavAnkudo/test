import React from 'react';

import {Header} from '../component/header';
import {LeftBar} from '../component/leftBar';
import {FilterPanel} from '../component/filterPanel';
import {TableElement} from '../component/tableElement';
import {RedactionPanel} from '../component/redactionPanel';

function Redaction() {
   
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
                                <FilterPanel/>
                                <div className='right__side_third_block'>
                                    <TableElement/>
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