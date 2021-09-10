import React, { memo, useRef, useState } from 'react';
import './yearPick.css';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';


const YearPick = memo(({ onYear, onReset }) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();
    let [prev, setPrev] = useState('');
    let [check, setCheck] = useState(false);

    const onInputChange = () => {     
        setCheck(false);
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        if(prev === start){
            if(!check){
                onResetYear();
                return;
            }
        }
        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }  
        setPrev(start);
        onYear(start, end);
    };

    const onClick = () => {
        setCheck(true);
    }

    const onChange = () => {
        onInputChange();
        setTimeout(()=>{
            let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
            if(prev === start){
                setCheck(false);
            }
        },100);
    }


    const onResetYear = () => {
        pick.current.firstElementChild.children.item(0).firstElementChild.value = '';
        pick.current.firstElementChild.children.item(2).firstElementChild.value = '';
        onReset();
    }


    return (
        <Space direction="vertical" size={12} readOnly>
            <div ref={pick} onClick={onClick}>
                <RangePicker onChange={onChange} picker="year" bordered={false} readOnly/>
            </div>
        </Space>
    )
})

export default YearPick;