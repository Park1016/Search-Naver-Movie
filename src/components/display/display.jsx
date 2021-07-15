import React from 'react';
import styles from './display.module.css';
import { Select } from 'antd';

const Display = ({onDisplay}) => {
    const { Option } = Select;

    const onChange = (input) => {
        if(input == undefined){
            return;
        }
        onDisplay(input);
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
            className={styles.display}
            onChange={onChange}
            onClick={(e)=>onClick(e)}
            showSearch
            placeholder="영화 개수"
            readOnly
        >
            <Option value="10">10</Option>
            <Option value="20">20</Option>
            <Option value="30">30</Option>
            <Option value="40">40</Option>
            <Option value="50">50</Option>
            <Option value="60">60</Option>
            <Option value="70">70</Option>
            <Option value="80">80</Option>
            <Option value="90">90</Option>
            <Option value="100">100</Option>
        </Select>
    )
}
    
export default Display;




