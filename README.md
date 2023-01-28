# Search-Naver-Movie

🎬 Search-Naver-Movie는 네이버 영화 api를 연동한 영화검색 사이트입니다.

배포 주소 : https://search-naver-movie.netlify.app/

<br>

## 목차

1. [배포 주소](#1)
2. [프로젝트 기능 설명](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [기술 스택](#5)

<br>

## 1. 배포 주소<a id="1"></a>

https://search-naver-movie.netlify.app/

<br>

## 2. 프로젝트 기능 설명 <a id="2"></a>

<hr />

#### 시연영상

https://www.youtube.com/watch?v=tpHGeJiywH0

#### 시작화면

![movie-시작화면](https://user-images.githubusercontent.com/76847993/136398395-9e26b3cf-092e-4b3f-85a0-77e80bc04b00.gif)

#### 영화 검색

![movie-검색!](https://user-images.githubusercontent.com/76847993/136398333-2361f87e-4de9-41b0-884c-9c3bad52c9aa.gif)

#### 년도, 개수별 검색

![movive-년도,개수!](https://user-images.githubusercontent.com/76847993/136398311-3550a3f7-ce97-403d-b5e2-6a67d34dc0cd.gif)

#### 국가별 검색

![movie-국가](https://user-images.githubusercontent.com/76847993/136398429-c51bb4bd-e728-4e69-96f7-fa321d534d04.gif)

#### 검색결과 없음

![movie-결과없음](https://user-images.githubusercontent.com/76847993/136398440-93219332-113d-48ae-9a51-3946555d3ec8.gif)

#### 반응형

![movie-반응형!](https://user-images.githubusercontent.com/76847993/136398350-3da72c11-b1a2-44e5-8c1e-685bfbb65264.gif)

<br>

<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

```js
$ npm update
$ yarn install
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>

```
📦public
 ┣ 📂images
 ┃ ┣ 📜cam.png
 ┃ ┣ 📜empty.png
 ┃ ┣ 📜film.png
 ┃ ┣ 📜noMoviePoster.png
 ┃ ┣ 📜popcorn.png
 ┃ ┗ 📜readyAction.png
 ┣ 📜index.html
 ┗ 📜movie.ico
📦src
 ┣ 📂components
 ┃ ┣ 📂countryCode
 ┃ ┃ ┣ 📜countryCode.jsx
 ┃ ┃ ┗ 📜countryCode.module.css
 ┃ ┣ 📂display
 ┃ ┃ ┣ 📜display.jsx
 ┃ ┃ ┗ 📜display.module.css
 ┃ ┣ 📂guidance
 ┃ ┃ ┣ 📜guidance.css
 ┃ ┃ ┣ 📜guidance.jsx
 ┃ ┃ ┗ 📜guidance.module.css
 ┃ ┣ 📂input
 ┃ ┃ ┣ 📜input.jsx
 ┃ ┃ ┗ 📜input.module.css
 ┃ ┣ 📂loading
 ┃ ┃ ┣ 📜loading.css
 ┃ ┃ ┣ 📜loading.jsx
 ┃ ┃ ┗ 📜loading.module.css
 ┃ ┣ 📂logo
 ┃ ┃ ┣ 📜logo.css
 ┃ ┃ ┣ 📜logo.jsx
 ┃ ┃ ┗ 📜logo.module.css
 ┃ ┣ 📂movieList
 ┃ ┃ ┣ 📜movieList.css
 ┃ ┃ ┣ 📜movieList.jsx
 ┃ ┃ ┗ 📜movieList.module.css
 ┃ ┣ 📂moviePage
 ┃ ┃ ┣ 📜moviePage.css
 ┃ ┃ ┣ 📜moviePage.jsx
 ┃ ┃ ┗ 📜moviePage.module.css
 ┃ ┗ 📂yearPick
 ┃ ┃ ┣ 📜yearPick.css
 ┃ ┃ ┗ 📜yearPick.jsx
 ┣ 📂service
 ┃ ┣ 📜naver-axios.js
 ┃ ┗ 📜naver-fetch.js
 ┣ 📜app.jsx
 ┣ 📜app.module.css
 ┣ 📜index.css
 ┗ 📜index.js
```

<br>

## 5. 기술 스택 <a id="5"></a>

#####언어<br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=black">
<img src="https://img.shields.io/badge/postCss-DD3A0A?style=for-the-badge&logo=postCss&logoColor=black"><br/>

#####라이브러리<br/>
<img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=AntDesign&logoColor=black">

<br>
