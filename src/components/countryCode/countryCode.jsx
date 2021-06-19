﻿import React from 'react';
import styles from './countryCode.module.css';
import { Select } from 'antd';


const CountryCode = ({onCountry}) => {
    
    const { Option } = Select;

    const onChange = (input) => {
        if(input == undefined){
            return;
        }
        onCountry(input);
    }

    const onClick = (e) => {
        if(e.currentTarget.firstElementChild.lastElementChild == null){
            return;
        }
        const target = e.currentTarget.firstElementChild.lastElementChild.value;
        onChange(target);
    }


    return (
        <Select
            onChange={onChange}
            onClick={(e)=>onClick(e)}
            showSearch
            placeholder="국가별 검색"
            // style={{ width: 200 }}
            // optionFilterProp="children"
            // filterOption={(input, option) =>
            // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            // filterSort={(optionA, optionB) =>
            // optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            // }
        >
            <Option value="">All</Option>
            <Option value="KR">한국</Option>
            <Option value="JP">일본</Option>
            <Option value="US">미국</Option>
            <Option value="HK">홍콩</Option>
            <Option value="GB">영국</Option>
            <Option value="FR">프랑스</Option>
            <Option value="ETC">기타</Option>
        </Select>
    )
}
export default CountryCode;