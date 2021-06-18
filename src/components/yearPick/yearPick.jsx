import React, { memo, useRef } from 'react';
import styles from './yearPick.module.css';
import './yearPick.css';
import { Rate, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { getConfirmLocale } from 'antd/lib/modal/locale';

let year = new Date().getFullYear();
let firstYear = 0;
let lastYear = 1;

const YearPick = memo(({onYear}) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();


    const onInputClick = (e) => {
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        let init = pick.current.firstElementChild.children.item(4);
        console.log(e.target);
        if(start == '' && end == ''){
            return;
        };
        if(e.target == init){
            console.log('휴...');
            start = 0;
            end = year;
        };
        onYear(start, end);
    };
    
    const onInputChange = () => {
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        console.log('s',start, 'e',end);
        if(start == '' && end == ''){
            console.log('비었을때', start, end);
            return;
        };
        console.log(start, end);
        onYear(start, end);
        
        // if(firstYear < lastYear){
        //     console.log('z');
        //     firstYear = target;
        //     return;
        // }
        // if(firstYear > lastYear){
        //     lastYear = target;
        //     return;
        // }
        // if(firstYear == lastYear){
        //     if(target < firstYear){
        //         firstYear = target;
        //         return;
        //     }
        //     if(target > lastYear){
        //         lastYear = target;
        //         return;
        //     }
        // }
    };

    return (
        <section onClick={e=>onInputClick(e)}>
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