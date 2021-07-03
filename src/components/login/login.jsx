/*global kakao*/
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';


const Login = ({authService}) => { 
    const history = useHistory();
    const href = useRef();
    window.Kakao.init(process.env.REACT_APP_NAVER);
    
    const goToMaker = userId => {
        history.push({
            pathname: '/movie',
            state: { id: userId },
        });
        };
    
        const onLogin = event => {
        authService //
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
            // .then(console.log);
        };
    
        useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.id);
        });
        });
    
    document.cookie = 'cookie1=value1; SameSite=Lax';
    document.cookie = 'cookie2=value2; SameSite=None; Secure';

    document.cookie = "safeCookie1=foo; SameSite=Lax";


    function kakaoLogin(){
        window.Kakao.Auth.login({
            scope:'	profile_nickname,profile_image,account_email,gender,age_range',
            success:function(authObj){
                console.log(authObj);
                window.Kakao.API.request({
                    url:'/v2/user/me',
                    success:res => {
                        const kakao_account = res.kakao_account;
                        const age_range = kakao_account.age_range;
                        const email = kakao_account.email;
                        const gender = kakao_account.gender;
                        const nickname = kakao_account.profile.nickname;
                        const image = kakao_account.profile.thumbnail_image_url;
                        // console.log(window.cookie);
                        history.push({
                            pathname: '../movie',
                            state: {age_range, email, gender, nickname, image},
                        });
                    }
                });
            }
        });
    };


    return (
        <>
            <h1>login</h1>
            <button ref={href} onClick={kakaoLogin}>카카오로그인</button>
            <button onClick={onLogin}>Google</button>
            <button onClick={onLogin}>Github</button>
        </>
    )
}

export default Login;