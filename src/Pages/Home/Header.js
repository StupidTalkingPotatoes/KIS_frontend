import React from 'react';
import styled from 'styled-components';

function Header() {
  const urlName = window.location.pathname.slice(1, window.location.pathname.length);

  return (
    <Content>
      <Div>
        <H1><A $title href='/'>KIS</A></H1>
        <Explan>Kneeling bus Information System</Explan>
      </Div>
      <Div>
        <Ul>
          {urlName === "arrival" ?
            (<Li $this><A href='/arrival'> 실시간 도착 정보 </A></Li>)
            :
            (<Li><A href='/arrival'> 실시간 도착 정보 </A></Li>)
          }
          <Li $contour> | </Li>
          {urlName === "location" ?
            (<Li $this><A href='/location'> 실시간 위치 정보 </A></Li>)
            :
            (<Li><A href='/location'> 실시간 위치 정보 </A></Li>)
          }
          <Li $contour> | </Li>
          {urlName === "path" ?
            (<Li $this><A href='/path'> 경로 탐색 </A></Li>)
            :
            (<Li><A href='/path'> 경로 탐색 </A></Li>)
          }
        </Ul>
      </Div>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  color: #547346;
  justify-content: space-between;
  height: 100px;
`

const H1 = styled.h1`
  color: #53B332;
  font-size: 40px;
  padding: 0px;
  margin: 20px 20px 5px 20px;
  text-shadow: -2px 0px #547346, 0px 2px #547346, 2px 0px #547346, 0px -2px #547346, 2px 3px 3px #888;
`

const Div = styled.div`
  display: inline-block;
`

const Explan = styled.p`
  padding: 0px;
  margin: 0px 20px 20px 20px;
`

const Ul = styled.ul`
  display: flex;
  padding: 0px;
  margin: 30px 50px;
  font-size: 20px;
`

const Li = styled.li`
  list-style: none;
  margin: ${prop => prop.$contour? "0px 12px" : "0px"};
  font-weight: ${prop => prop.$this? "700" : ""};
`

const A = styled.a`
  color: ${prop => prop.$title? "#53B332" : "#547346"};
  text-decoration: none;
`

export default Header;