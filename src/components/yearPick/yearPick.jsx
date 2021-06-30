import React, { memo, useRef, useState } from 'react';
import styles from './yearPick.module.css';
import './yearPick.css';
import {Rate, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { getConfirmLocale } from 'antd/lib/modal/locale';

let year = new Date().getFullYear();

const YearPick = memo(({onYear, onReset}) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();
    let [prev, setPrev] = useState('');

    const onInputChange = () => {     
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
    
        if(prev === start){
            onResetYear();
        }
        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }  
        onYear(start, end);
        setPrev(start);
    };

    
    const onResetYear = () => {
        pick.current.firstElementChild.children.item(0).firstElementChild.value = '';
        pick.current.firstElementChild.children.item(2).firstElementChild.value = '';
        onReset();
    }

    return (
        <section>
            <Space direction="vertical" size={12}>
                <div ref={pick} className={styles.yearPick}>
                    <RangePicker onChange={onInputChange} picker="year" bordered={false} />
                </div>
            </Space>
            {/* <Rate allowHalf defaultValue={0} /> */}
        </section>
    )
})

export default YearPick;