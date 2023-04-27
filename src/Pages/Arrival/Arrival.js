import React, { useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import Header from '../Home/Header.js';
import bus from '../../Images/bus.png';

function Arrival() {
  useEffect(() => {
    Map();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Search>
          <Select>
            <option value="정류장 번호">정류장 번호</option>
            <option value="정류장명">정류장명</option>
          </Select>
          <Input type="text" placeholder="정류장 번호를 검색하세요." />
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
          <Bus>
            <Section2 $top>
              <Flex>
                <Img src={bus} />
                <Div>
                  <H2>191번</H2>
                  <P>구미역 방면</P>
                  <Flex>
                    <Time>1분</Time>
                    <P>2번째 전</P>
                  </Flex>
                </Div>
              </Flex>
            </Section2>
            <Section>
              <Flex>
                <Img src={bus}/>
                <Div>
                  <H2>198번</H2>
                  <P>구미역 방면</P>
                  <Flex>
                    <Time>7분</Time>
                    <P>6번째 전</P>
                  </Flex>
                </Div>
              </Flex>
            </Section>
            <Section2>
              <Flex>
                <Img src={bus}/>
                <Div>
                  <H2>199번</H2>
                  <P>구미역 방면</P>
                  <Flex>
                    <Time>13분</Time>
                    <P>10번째 전</P>
                  </Flex>
                </Div>
              </Flex>
            </Section2>
          </Bus>
        </Flex>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  color: #53B332;
`

const Search = styled.div`
  position: relative;
  width: 50%;
  margin: 20px auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
`

const Select = styled.select`
  position: absolute;
  outline: none;
  left: 19px;
  top: 16.5px;
  height: 32px;
  color: white;
  font-size: 17px;
  font-weight: 800;
  padding: 5px 15px;
  border: 0px;
  border-radius: 50px;
  background-color: #53B332;
`

const Section = styled.div`
  width: 100%;
  height: 20vh;
  margin: ${props => props.$top ? "30px 0px 0px 0px" : "0px"};
  padding: 20px;
  color: #547346;
  vertical-align: middle;
  background-color: #e1f8d44a;
`

const Section2 = styled(Section)`
  background-color: #52b33236;
`

const Input = styled.input`
  outline: none;
  padding: 5px 20px 5px 155px;
  width: 80%;
  height: 30px;
  font-size: 18px;
  border: 3px solid #53B332;
  border-radius: 50px;
`

const Bus = styled.div`
  display: block;
  width: 20%;
  height: 72.8vh;
  overflow: hidden;
`

const Mymap = styled.div`
  width: 80%;
  height: 70vh;
  margin-top: 30px;
`

const Img = styled.img`
  width: 110px;
  height: 110px;
  padding: 45px 20px 40px 50px;
`

const H2 = styled.h2`
  padding-top: 45px;
  margin: 10px;
  display: inline-block;
`

const P = styled.p`
  margin: 3px 10px;
`

const Time = styled(P)`
  color: red;
  font-weight: 700;
`

const Flex = styled.div`
  display: flex;
`

const Div = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export default Arrival;