import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './yearPick.module.css';
import './yearPick.css';
import {Rate, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { getConfirmLocale } from 'antd/lib/modal/locale';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import { StaticRouter } from 'react-router-dom';

let year = new Date().getFullYear();
// const calendar = document.querySelector('.ant-picker-dropdown-hidden');
const calendar = document.querySelector('.ant-picker-dropdown');
// const calendarBody = document.querySelector('.ant-picker-body');

const YearPick = memo(({onYear, onReset, query, movie}) => {
    const { RangePicker } = DatePicker;
    const pick = useRef();
    const test = useRef();
    const guidance = useRef();
    const alert = useRef();
    let [saveStart, setSaveStart] = useState('');
    let [prevStart, setPrevStart] = useState('');
    // let [prevEnd, setPrevEnd] = useState('');
    let [prev, setPrev] = useState('');

    const onInputChange = (startYear) => {     
        // console.log('?');
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        if(movie.length == 0){
            // onResetYear();
            // onInputClick();
            // return;
        }
        if(prevStart === start){
            onResetYear();
        }
        // if(start > year){
            // const calendarBody = test.current.parentElement.parentElement.parentElement.
            // parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.
            // nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;

            // console.log(calendarBody.getAttribute('class'));
            // if(calendar != null){
            //     console.log(calendar.className);
            //     console.log(calendar.hasAttribute('ant-picker-dropdown-hidden'));
            // }
            // if(calendar != null && calendar.style.display == 'none'){
                // onShowAlert(startYear);
            // }
            // return;
        // }


        if(start == '' && end != ''){
            start = end;
        }
        if(start != '' && end == ''){
            end = start;
        }  
        setSaveStart(start);
        onYear(start, end);
        setPrevStart(start);
        // setPrevEnd(end);
        setPrev(start);
    };

    
    const onResetYear = () => {
        pick.current.firstElementChild.children.item(0).firstElementChild.value = '';
        pick.current.firstElementChild.children.item(2).firstElementChild.value = '';
        onReset();
    }

    const onHideAlert =() => {
        alert.current.style.display = 'none';
    }
    
    const onShowAlert =(startYear) => {
    //     // if(!alertCheck){
    //     //     console.log(alertCheck);
    //     //     return;
    //     // }
    //     console.log(startYear);
    //     if(startYear === 0){
    //         return;
    //     }
        if(startYear === null){
            onResetYear();
            return;
        }
    //     setPrev(0);
        alert.current.style.display = 'block';
        onResetYear();
    }

    // useEffect(()=>{
    //     if(query){
    //         if(movie != undefined){
    //             if(movie.length == 0){
    //                 onResetYear();
    //                 return;
    //             }
    //         }
    //     }
    // },[movie]);

    const onInputClick = (e) => {
        let start = pick.current.firstElementChild.children.item(0).firstElementChild.value;
        let end = pick.current.firstElementChild.children.item(2).firstElementChild.value;
        // const calendarBody = test.current.parentElement.parentElement.parentElement.
        // parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.
        // nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;
    //     onInputChange();
    //     console.log('1');
    //     if(!calendar){
    //         return;
    //     }
    //     console.log('2');
    //     if(prev != 0 | start>year){
    //         return;
    //     }
    //     console.log('3');
    //     if(e.target.tagName == 'INPUT'){
    //         setPrev(start);
    //         setPrev((start)=>{
    //             onInputChange(start);
    //         })
    //     }
        // let a = start;
        // let b = end;
        // console.log('a: '+a, 'b: '+b);
        // console.log('s:'+start, 'e:'+end);
        // if(e.target.className == 'ant-picker-cell-inner'){           
        //     if(a > year && b > year){
        //         a = 0;
        //         b = 0;
        //         onShowAlert();
        //     }
        // }



        // const calendarBody = test.current.parentElement.parentElement.parentElement.
        //     parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.
        //     nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;
        // console.log(calendarBody);
        // console.log(calendarBody.className);
        // console.log(calendarBody.classList.contains('ant-slide-up-leave'));
        // console.log(calendarBody.classList.contains('ant-picker-dropdown-hidden'));
        // if(start == '' && end != ''){
        //     start = end;
        // }
        // if(start != '' && end == ''){
        //     end = start;
        // }  
        // console.log(e);
        // if(e != undefined){
        //     console.log(e.target.className);
        //     // ant-picker-cell-inner
        //     if(e.target == end){
        //         setSaveStart(start);
        //         onYear(start, end);
        //         setPrevStart(start);
        //         // setPrevEnd(end);
        //         setPrev(start);
        //         console.log('끝');
        //         return;
        //     }
        // }
    }


    return (
        <section ref={test}>
            <div ref={alert} className={styles.alertBack}>
                <div className={styles.alert}>
                    <p className={styles.p1}>{year}년 이전의 년도를 선택해주세요</p>
                    <p className={styles.p2}>개봉 예정작은 검색결과에 포함되지 않습니다</p>
                    <button className={styles.button} onClick={onHideAlert}>확인</button>
                </div>
            </div>
            {/* <h1 ref={guidance} className={styles.guidance}></h1> */}
            <Space onClick={(e)=>onInputClick(e)} direction="vertical" size={12} readOnly>
                <div ref={pick} className={styles.yearPick}>
                    <RangePicker onChange={onInputChange} picker="year" bordered={false} readOnly/>
                </div>
            </Space>
            {/* <Rate allowHalf defaultValue={0} /> */}
        </section>
    )
})

export default YearPick;