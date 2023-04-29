import React, { useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import Header from "../Home/Header";

function Path() {
  useEffect(() => {
    Map();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Flex>
          <Mymap id='myMap'></Mymap>
          <Div>
            <Search>
              <Input type="text" placeholder="출발지를 입력하세요." />
              <span class="material-symbols-outlined"
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "35px",
                  fontWeight: "600",
                  color: "#53B332",
                  cursor: "pointer"
                }}
                >search</span>
              <Input type="text" placeholder="도착지를 입력하세요." />
              <span class="material-symbols-outlined"
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "100px",
                  fontWeight: "600",
                  color: "#53B332",
                  cursor: "pointer"
                }}
                >search</span>
            </Search>
            <Select>
              <option value="최소 시간순">최소 시간순</option>
              <option value="최적 경로순">최적 경로순</option>
            </Select>
            <Bus $top>
              <H3>16분</H3>
              <Content>
                <Flex>
                  <H4>도보</H4>
                  <P>(6분)</P>
                </Flex>
                <Flex>
                  <H4>191</H4>
                  <P>(10분)</P>
                </Flex>
                <P $direction>구미역(금오공대 방면)</P>
                <Time>
                  9분
                </Time>
                <Time>
                  17분
                </Time>
                <Flex>
                  <H4>하차</H4>
                  <P>금오공대 종점</P>
                </Flex>
              </Content>
            </Bus>
            <Bus>
              <H3>30분</H3>
              <Content>
                <Flex>
                  <H4>도보</H4>
                  <P>(11분)</P>
                </Flex>
                <Flex>
                  <H4>199</H4>
                  <P>(19분)</P>
                </Flex>
                <P $direction>구미역(금오공대 방면)</P>
                <Time>
                  5분
                </Time>
                <Flex>
                  <H4>하차</H4>
                  <P>금오공대 종점</P>
                </Flex>
              </Content>
            </Bus>
          </Div>
        </Flex>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  color: #547346;
`

const Select = styled.select`
  outline: none;
  color: #547346;
  font-size: 16px;
  font-weight: 600;
  float: right;
  margin: 5px 20px 15px 0px;
  padding: 5px 10px;
  border: 0px;
`

const Search = styled.div`
  position: relative;
  width: 70%;
  margin: 35px 20px 5px 20px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  outline: none;
  width: 90%;
  height: 30px;
  font-size: 18px;
  margin: 15px 0px 5px 5px;
  padding: 5px 20px;
  border: 3px solid #53B332;
  border-radius: 50px;
`

const Bus = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #54734636;
  border-top: ${prop => prop.$top? "1px solid #54734636" : "0px"};
`

const Mymap = styled.div`
  width: 90%;
  height: 80vh;
  margin-top: 28px;
`

const Content = styled.div`
  padding: 10px;
  margin: 10px 20px;
  border-radius: 15px;
  background-color: #52b33236;
`

const H3 = styled.h3`
  margin: 0px 0px 5px 33px;
  padding-top: 20px;
  font-size: 25px;
  display: block;
`

const H4 = styled.h4`
  margin: 5px 10px;
  font-size: 18px;
  display: block;
`

const P = styled.p`
  padding: 0px;
  margin: 5px 10px;
  margin-left: ${prop => prop.$direction? "60px" : "10px"};
`

const Time = styled(P)`
  color: red;
  font-weight: 700;
`

const Flex = styled.div`
  display: flex;
`

const Div = styled.div`
  width: 430px;
  overflow: hidden;
`

export default Path;