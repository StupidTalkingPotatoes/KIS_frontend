import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import Header from "../Home/Header";

function Path() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Map();
  }, []);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://2a9908a5-f393-436e-86ea-49797d7a1d1f.mock.pstmn.io/api/paths?departure&arrival", requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  console.log(list);

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
            <PathList>
              {list && list.map((items) => 
                <PathContent>
                  <H3>{items.duration}분</H3>
                  {items.stepList.map((item) =>
                    <Content>
                      <Flex>
                        <H4>{item.type}</H4>
                        <P>({item.duration}분)</P>
                        {/* 버스 하나를 몇 분동안 타는 지 */}
                      </Flex>
                      <Flex>
                        <H4>승차</H4>
                        <P>{item.departure}</P>
                      </Flex>
                      {item.arrivalRouteList.map((it) => 
                        <>
                          <Flex>
                            <H4>{it.routeNo}</H4>
                            <P $direction>{it.departureName}</P>
                          </Flex>
                          <Time>
                            {it.arrTime}분
                          </Time>
                        </>
                      )}
                      <Flex>
                        <H4>하차</H4>
                        <P>{item.arrival}</P> 
                        {/* 하차 지점 */}
                      </Flex>
                    </Content>
                  )}
                </PathContent>
              )}
            </PathList> 
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

const PathList = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 58vh;
  padding-bottom: 20px;
  overflow: scroll;
`
const PathContent = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #54734636;
  border-top: 1px solid #54734636;
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
`

const Time = styled(P)`
  color: red;
  font-weight: 700;
  margin-left: 65px;
`

const Flex = styled.div`
  display: flex;
`

const Div = styled.div`
  width: 430px;
  overflow: hidden;
`

export default Path;