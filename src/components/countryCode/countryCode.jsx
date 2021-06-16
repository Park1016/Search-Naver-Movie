import React from 'react';
import styles from './countryCode.module.css';
import { Select } from 'antd';


const CountryCode = (props) => {
    
    const { Option } = Select;
    let korean = /[가-힣]/gm;

    const onChange = (input) => {
        if(input.length > 3 | input.search(korean) >= 0){
            // console.log(input.search(korean));
            return;
        }
        if(input == 'ALL'){
            console.log('all!!');
            return "";
        }
        console.log(input);
    }

    const onClick = (e) => {
        const target = e.currentTarget.firstElementChild.lastElementChild.textContent;
        // console.log(target);
        onChange(target);
    }
    
    return (
        // <select onClick={(e)=>{onClick(e)}}>
        //     <option value="all">all</option>
        //     <option value="KR">한국</option>
        //     <option value="JP">일본</option>
        //     <option value="US">미국</option>
        //     <option value="HK">홍콩</option>
        //     <option value="GB">영국</option>
        //     <option value="FR">프랑스</option>
        //     <option value="ETC">기타</option>
        // </select>

        <Select
            onChange={onChange}
            onClick={(e)=>onClick(e)}
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            // optionFilterProp="children"
            // filterOption={(input, option) =>
            // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            // filterSort={(optionA, optionB) =>
            // optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            // }
        >
            <Option value="ALL">All</Option>
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