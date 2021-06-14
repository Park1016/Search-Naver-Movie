import React, { memo } from 'react';
import styles from './options.module.css';
import './options.css';
import { Rate, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

let year = new Date().getFullYear();
let firstYear = 0;
let lastYear = 1;

const Options = memo((props) => {
    const { RangePicker } = DatePicker;

    const onInputClick = (e) => {
        const target = e.target.textContent;
        if(!e.target.classList.contains('ant-picker-cell-inner')|target.length != 4){
            return;
        }   
        if(firstYear < lastYear){
            firstYear = target;
            return;
        }
        if(firstYear > lastYear){
            lastYear = target;
            return;
        }
        if(firstYear == lastYear){
            if(target < firstYear){
                firstYear = target;
                return;
            }
            if(target > lastYear){
                lastYear = target;
                return;
            }
        }
    }

    const onPassData = () => {
        let smallYear = firstYear;
        let largeYear = lastYear;
        if(smallYear > largeYear){
            smallYear = lastYear;
            largeYear = firstYear;
        }
        console.log('fl  ' + firstYear, lastYear);
        console.log('sl  ' + smallYear, largeYear);
    }

    const onTotal = (e) => {
        onInputClick(e);
        onPassData();
    }

    return (
        <>
            <Space onClick={e=>onTotal(e)} direction="vertical" size={12}>
                <RangePicker picker="year" bordered={false} />
            </Space>
            {/* <Rate allowHalf defaultValue={0} /> */}
        </>
    )
})

export default Options;