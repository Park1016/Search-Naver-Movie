import React, { useEffect, useRef, history } from 'react';
import styles from './login.module.css';

const Login = (props) => {
    const href = useRef();
    window.Kakao.init(process.env.REACT_APP_NAVER);
    
    // Set a same-site cookie for first-party contexts
    document.cookie = 'cookie1=value1; SameSite=Lax';
    // Set a cross-site cookie for third-party contexts
    document.cookie = 'cookie2=value2; SameSite=None; Secure';

    function kakaoLogin(){
        window.Kakao.Auth.login({
            scope:'	profile_nickname,profile_image,account_email,gender,age_range',
            success:function(authObj){
                console.log(authObj);
                window.Kakao.API.request({
                    url:'/v2/user/me',
                    success:res => {
                        const kakao_account = res.kakao_account;
                        console.log(kakao_account);
                        // history.push({
                        //     pathname: '../questions/questions',
                        //     state: {name: name},
                        // });
                    }
                });
            }
        });
    }

    return (
        <>
            <h1>login</h1>
            <a ref={href} href="javascript:void(0);" onClick={kakaoLogin}>카카오로그인</a>
        </>
    )
}

export default Login;