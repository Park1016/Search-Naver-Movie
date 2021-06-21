import React, { memo, useRef } from 'react';
import styles from './yearPick.module.css';
import './yearPick.css';
import { Rate, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { getConfirmLocale } from 'antd/lib/modal/locale';

let year = new Date().getFullYear();
let firstYear = 0;
let lastYear = 1;

const YearPick = memo(({onYear, onReset}) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();


    const onInputClick = (e) => {
        // let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        // let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        // let init = pick.current.firstElementChild.children.item(4);
        // // console.log(e.target);
        // if(start == '' && end == ''){
        //     return;
        // };
        // if(e.target == init){
        //     start = 0;
        //     end = year;
        // };
        // onYear(start, end);

        // console.log(e.target);
        if(e.target.classList.contains('ant-picker')){
            console.log(e.target.lastElementChild.firstElementChild.firstElementChild.viewBox);
            if(e.target.lastElementChild.firstElementChild.firstElementChild.dataIcon == "close-circle"){
            }
            // onReset();
        }
    };
    
    const onInputChange = () => {
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        if(start == '' && end == ''){
            return;
        };
        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }
        // console.log('s',start, 'e',end);
        // console.log(start, end);
        onYear(start, end);
    };

    // const onResetBtn = () => {
    //     pick.current.firstElementChild.children.item(0).firstElementChild.value = '';
    //     pick.current.firstElementChild.children.item(2).firstElementChild.value = '';
    //     onReset();
    // }

    return (
        // <section onClick={e=>onInputClick(e)}>
        <section className={styles.yearPick}>
            <Space direction="vertical" size={12}>
                <div ref={pick} className={styles.yearPick}>
                    <RangePicker onChange={onInputChange} picker="year" bordered={false} />
                </div>
            </Space>
            {/* <Rate allowHalf defaultValue={0} /> */}
            {/* <button className={styles.yearReset} onClick={onResetBtn}>reset</button> */}
        </section>
    )
})

export default YearPick;