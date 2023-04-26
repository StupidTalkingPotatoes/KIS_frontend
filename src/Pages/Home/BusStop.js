import React, { useEffect } from 'react';
import Map from "./Map";
import styled from 'styled-components';
import Notice from './Notice.js';
import bus from '../../Images/bus.png';

function BusStop() {
  useEffect(() => {
    Map();
  }, []);

  return (
    <Container>
      <Search>
        <span class="material-symbols-outlined"
          style={{
            color: "#53B332",
            fontSize: "45px",
            margin: "0px"
          }}>location_on
        </span>
        <Input type='text' value="경상북도 구미시 대학로 61" disabled/>
      </Search>
      <Mymap id='myMap'></Mymap>
      <Div>
        <Anchor>
          <Section>
            <Img src={bus} />
            <H3>실시간 도착 정보</H3>
            <P>저상버스의 실시간 도착 정보를 알려드립니다.</P>
          </Section>
          <Section2>
            <Img src={bus}/>
            <H3>실시간 위치 정보</H3>
            <P>저상버스의 실시간 위치 정보를 알려드립니다.</P>
          </Section2>
          <Section>
            <span class="material-symbols-outlined"
              style={{
                color: "#53B332",
                fontSize: "73px",
                fontWeight: "bolder",
                padding: "0px",
                margin: "11px"
              }}>location_on
            </span>
            <H3>경로 탐색</H3>
            <P>출발지와 도착지를 검색하여 경로를 탐색합니다.</P>
          </Section>
        </Anchor>
        <Notice />
      </Div>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  color: #53B332;
  display: inline-block;
`

const Input = styled.input`
  padding: 5px 20px;
  margin: 2px 0px 0px 10px;
  height: 23px;
  color: #547346;
  font-weight: 800;
  font-size: 16.5px;
  border: 3px solid #53B332;
  border-radius: 50px;
  outline: none;
`

const Search = styled.div`
  display: flex;
  margin: 20px 20px 40px 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`

const Mymap = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 35px;
`

const Anchor = styled.div`
  width: 55%;
`

const Section = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 27.5%;
  height: 180px;
  padding: 20px;
  color: #547346;
  text-align: center;
  background-color: #e1f8d44a;
`

const Section2 = styled(Section)`
  background-color: #52b33236;
`

const Img = styled.img`
  width: 90px;
  height: 90px;
`

const H3 = styled.h3`
  margin: 10px;
`

const P = styled.p`
  margin: 7px 0px;
`

const Div = styled.div`
  display: flex;
`

const A = styled.a`
`

export default BusStop;