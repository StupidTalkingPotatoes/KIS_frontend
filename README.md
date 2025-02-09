# 🎨 Kneeling bus Information System
🚌 **저상버스 정보 시스템**  
🔹 **4인(프론트 1인, 백 3인) 프로젝트**  
📅 **개발 기간:** 2023.04.26 ~ 2023.06.08

<br/>

## 💬 Project Introduce
안드로이드 앱에서는 전체 버스 정보를 알려주는 앱만 존재하고 iOS 앱에서는 서울시를 한정한 어플만 있었습니다. <br />
지자체에서 제공하는 버스 정보 시스템에서는 저상버스만 조회할 수 없었습니다. <br />
운영체제 상관없이 접근 가능한 웹 서비스 기반 저상버스 정보 시스템을 개발했습니다. <br />

<br/>

## 🚀 Getting Started
### 🛠 Requirements  
For building and running the application you need:
- **Node.js** `>= 16.0.0`  
- **Npm** `>= 7.0.0`  


### 📦 Installation  
```bash
$ git clone https://github.com/seung-mii/KIS_frontend.git
$ cd KIS_frontend  
```


### 🖥 Execution
``` bash
$ npm install
$ npm start
```

<br/>

## 🔧 Tech Stack
### ⚙️ Environment  
<p align="left">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>

### 🛠️ Development  
<p align="left">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</p>

### 📚 API  
<p align="left">
  <img src="https://img.shields.io/badge/Kakao%20Maps%20API-FFCD00?style=for-the-badge&logo=kakao&logoColor=black">
  <img src="https://img.shields.io/badge/Naver%20Maps%20API-03C75A?style=for-the-badge&logo=naver&logoColor=white">
</p>

### 💬 Communicate  
<p align="left">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</p>


<br/>

## 📺 Screen
| 주변 정류장 조회 | 실시간 버스 도착 정보 조회 |
|---|---|
| ![main](https://github.com/StupidTalkingPotatoes/KIS_documents/blob/main/%EA%B5%AC%ED%98%84%20%EA%B2%B0%EA%B3%BC%20%EC%82%AC%EC%A7%84/1-%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.png) | ![realtime-bus-arrival](https://github.com/StupidTalkingPotatoes/KIS_documents/blob/main/%EA%B5%AC%ED%98%84%20%EA%B2%B0%EA%B3%BC%20%EC%82%AC%EC%A7%84/4-%EC%8B%A4%EC%8B%9C%EA%B0%84%EB%8F%84%EC%B0%A9%EC%A0%95%EB%B3%B4%EA%B2%B0%EA%B3%BC2.png) |

| 실시간 버스 위치 정보 조회 | 경로 탐색 |
|---|---|
| ![realtime-bus-location](https://github.com/StupidTalkingPotatoes/KIS_documents/blob/main/%EA%B5%AC%ED%98%84%20%EA%B2%B0%EA%B3%BC%20%EC%82%AC%EC%A7%84/7-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%9C%84%EC%B9%98%EC%A0%95%EB%B3%B4%EA%B2%B0%EA%B3%BC.png) | ![path](https://github.com/StupidTalkingPotatoes/KIS_documents/blob/main/%EA%B5%AC%ED%98%84%20%EA%B2%B0%EA%B3%BC%20%EC%82%AC%EC%A7%84/9-%EA%B2%BD%EB%A1%9C%ED%83%90%EC%83%89%EA%B2%B0%EA%B3%BC.png) |

<br/>

## ✨ Key Features
### 💡 사용자의 현재 위치 반경 500m 내의 주변 정류장 조회
- 사용자의 현재 위치 주소와 현재 위치 확인 가능합니다.
- Geolocation API의 getCurrentPosition을 Promise로 감싸 비동기 방식으로 현재 사용자 위치를 조회했습니다.
- 정류장의 위치를 나타내는 마커를 누르면 해당 정류장명 확인 가능합니다.


### 💡 실시간 저상버스 도착 정보
- 정류장 번호 또는 정류장명을 검색하여 원하는 정류장을 선택하면 해당 저상버스 도착 정보 조회 가능합니다.
- 정류장의 위치와 정류장명 확인 가능합니다.
- 사용자가 선택한 정류장에 대한 버스 번호, 노선 방향, 남은 시간, 남은 정류장 수 정보 확인 가능합니다.


### 💡 실시간 버스 위치 정보
- 버스 번호를 검색하여 원하는 버스를 선택하면 해당 저상버스 위치 정보 조회 가능합니다.
- 해당 버스의 노선 방향, 실시간 위치와 마커로 표시된 버스가 경유하는 모든 정류장명과 정류장의 위치 확인 가능합니다.
- Marker()와 InfoWindow()를 사용하여 커스텀 아이콘과 정류장명 정보를 표시하여 사용자에게 직관적인 위치 정보 제공합니다.
- 현재 버스가 마지막으로 경유한 정류장 확인 가능합니다.


### 💡 경로 탐색
- 출발지와 도착지를 입력하면 출발지에서 도착지까지 도보 및 저상버스로만 이루어진 경로 확인 가능합니다.
- 출발지와 도착지의 위치, 환승 지점의 위치 확인 가능합니다.
- 각 경로에는 총 소요 시간과 경로 단계(이동 방식(도보 또는 버스)과 소요 시간)를 표시하며 이동 방식이 버스인 경우 승차 및 하차 정류장명, 이용 가능한 버스 번호, 그리고 남은 시간 확인 가능합니다.
- 환승과 같은 경우 저상버스로 환승할 수 있는 경로 제공합니다.


<br/>

## 🏛️ Architecture
### 📂 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── public/
│   └── index.html
└── src/
    ├── Images/
    │   ├── ...
    └── Pages/
        ├── Arrival/
        │   ├── Arrival.js
        │   ├── Map.js
        │   └── Modal.js
        ├── Home/
        │   ├── BusStop.js
        │   ├── Header.js
        │   ├── Home.js
        │   ├── Map.js
        │   └── Notice.js
        ├── Location/
        │   ├── Location.js
        │   ├── Map.js
        │   └── Modal.js
        ├── Path/
        │   ├── Map.js
        │   └── Path.js
        ├── App.css
        ├── App.js
        ├── index.css
        └── index.js

```

<br/>

<p align="right">
  <a href="https://github.com/seung-mii/KIS_frontend/tree/main">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fseung-mii%2FKIS_frontend&count_bg=%23748DA6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false">
  </a>
</p>
