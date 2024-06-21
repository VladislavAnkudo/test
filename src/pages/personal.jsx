import React from 'react';

import {Header} from '../component/header';
import {LeftBar} from '../component/leftBar';
import {TablePersonal} from '../component/tablePersonal';
import {FilterPanelPersonal} from '../component/filterPanelPersonal';
import {RedactionPanel} from '../component/redactionPanel';

function Personal() {
   
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
                                <FilterPanelPersonal/>
                                <div className='right__side_third_block'>
                                    <TablePersonal/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
      </div>
    );
  }

export  {Personal};