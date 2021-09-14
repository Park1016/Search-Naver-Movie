import React, { memo, useRef, useState } from 'react';
import './yearPick.css';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';


const YearPick = memo(({ onYear, onReset }) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();
    let [prev, setPrev] = useState('');
    let [prevEnd, setPrevEnd] = useState('');

    const onInputChange = () => {     
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        if((prev === start)&&(end === prevEnd)){
            onResetYear();
            return;
        }
        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }  
        setPrev(start);
        setPrevEnd(end);
        onYear(start, end);
    };

    const onResetYear = () => {
        console.log('reset');
        pick.current.firstElementChild.children.item(0).firstElementChild.value = '';
        pick.current.firstElementChild.children.item(2).firstElementChild.value = '';
        onReset();
    }


    return (
        <Space direction="vertical" size={12} readOnly>
            <div ref={pick}>
                <RangePicker onChange={onInputChange} picker="year" bordered={false} readOnly/>
            </div>
        </Space>
    )
})

export default YearPick;