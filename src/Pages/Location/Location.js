import React, { useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map.js";
import Header from '../Home/Header.js';
import bus from '../../Images/bus.png';

function Location() {
  useEffect(() => {
    Map();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Search>
          <Input type="text" placeholder="버스 번호를 검색하세요." />
          <span class="material-symbols-outlined"
            style={{
              position: "absolute",
              right: "40px",
              top: "20px",
              fontWeight: "600",
              color: "#53B332",
              cursor: "pointer"
            }}
            >search</span>
        </Search>
        <Flex>
          <Mymap id='myMap'></Mymap>
          <Div>
            <Bus>
              <Flex>
                <Img src={bus} />
                <H3>191번</H3>
                <P>구미역 방면</P>
              </Flex>
            </Bus>
            <Node>
              <Current>●</Current>
              <Line></Line>
              <NodeItem>구미역</NodeItem>
              <NodeItem>농협</NodeItem>
              <NodeItem>금오산사거리</NodeItem>
              <NodeItem>푸르지오캐슬B단지</NodeItem>
              <NodeItem>가톨릭근로자문화센타</NodeItem>
              <NodeItem>형곡금호어울림앞</NodeItem>
              <NodeItem>형곡네거리</NodeItem>
              <NodeItem>형곡두거리</NodeItem>
            </Node>
          </Div>
        </Flex>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  margin: auto;
  color: #547346;
`

const Search = styled.div`
  position: relative;
  width: 50%;
  margin: 20px auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  outline: none;
  padding: 5px 20px;
  width: 94.8%;
  height: 30px;
  font-size: 18px;
  border: 3px solid #53B332;
  border-radius: 50px;
`

const Bus = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  border-radius: 30px 30px 0px 0px;
  background-color: #52b33236;
`

const Mymap = styled.div`
  width: 81%;
  height: 65vh;
  margin-top: 80px;
`

const Img = styled.img`
  width: 45px;
  height: 45px;
  padding: 20px 10px 0px 20px;
`

const H3 = styled.h3`
  margin: 31px 8px 8px 5px;
  font-size: 25px;
  display: block;
`

const P = styled.p`
  margin: 40px 10px 0px 3px;
`

const Flex = styled.div`
  display: flex;
`

const Div = styled.div`
  width: 19%;
  height: 72.8vh;
  overflow: hidden;
`

const Node = styled.div`
  position: relative;
`

const NodeItem = styled.p`
  font-size: 20px;
  padding: 8px 0px 28px 40px;
  margin-left: 50px;
  border-bottom: 1px solid #54734636;
`

const Current = styled.h2`
  position: absolute;
  top: 5px;
  left: 40px;
  margin: 0px;
  color: #53B332;
  text-shadow: -4px 0px #fff, 0px 4px #fff, 4px 0px #fff, 0px -4px #fff, 0 0 14px #000;
  border-radius: 100%;
  z-index: 9;
`

const Line = styled.div`
  position: absolute;
  border-left : 3px solid #547346;
  height : 800px;
  top: 0px;
  left: 50px;
  margin: 0px;
  padding: 0px;
  color: #547346;
  z-index: 1;
`

export default Location;