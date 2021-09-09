import React, { memo, useRef } from 'react';
import './yearPick.css';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';


const YearPick = memo(({ onYear }) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();

    const onInputChange = () => {     
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }  
        onYear(start, end);
    };


    return (
        <setWebpackOptimizationSplitChunks>
            <Space direction="vertical" size={12} readOnly>
                <div ref={pick}>
                    <RangePicker onChange={onInputChange} picker="year" bordered={false} readOnly/>
                </div>
            </Space>
        </setWebpackOptimizationSplitChunks>
    )
})

export default YearPick;