import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import Header from "../Home/Header";

function Path() {
  const { kakao } = window; 
  const [list, setList] = useState([]);

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

  // console.log(list);

  return (
    <>
      <Header />
      <Container>
        <Flex>
          {list && 
            <Mymap>
              <Map />
            </Mymap>
          }
          <Div>
            <Search>
              <Input type="text" placeholder="출발지를 입력하세요." />
              <span class="material-symbols-outlined"
                style={{ position: "absolute", right: "10px", top: "35px", fontWeight: "600", color: "#53B332", cursor: "pointer" }}
              >search</span>
              <Input type="text" placeholder="도착지를 입력하세요." />
              <span class="material-symbols-outlined"
                style={{ position: "absolute", right: "10px", top: "100px", fontWeight: "600", color: "#53B332", cursor: "pointer" }}              
              >search</span>
            </Search>
            <PathList>
              {list && list.length > 0 ? (
                list.map((items) => (
                  <PathContent key={items.id}>
                    <H3>{items.duration}분</H3>
                    {items.stepList.map((item) =>
                      item.arrival != null ? (
                        <Content key={item.id}>
                          <Flex>
                            <Type>버스</Type>
                            <P>({item.duration}분)</P>
                          </Flex>
                          <Flex>
                            <H4>승차</H4>
                            <P>{item.departure.name}</P>
                          </Flex>
                          {item.arrivalRouteList != null && item.arrivalRouteList.length > 0 ? (
                            item.arrivalRouteList.map((it) => (
                              <Flex key={it.routeNo}>
                                <H4 $bus>{it.routeNo}</H4>
                                <Time>{it.arrTime}분</Time>
                              </Flex>
                            ))
                          ) : null}
                          <Flex>
                            <H4>하차</H4>
                            <P>{item.arrival.name}</P>
                          </Flex>
                        </Content>
                      ) : (
                        <Content $walking key={item.id}>
                          <Flex>
                            <Type $walking>도보</Type>
                            <P $walking>({item.duration}분)</P>
                          </Flex>
                        </Content>
                      )
                    )}
                  </PathContent>
                ))
              ) : (
                <H4 $no>현재 갈 수 있는 경로가 없습니다.</H4>
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

const Search = styled.div`
  position: relative;
  width: 80%;
  margin: 35px 20px 5px 14px;
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
  width: 85%;
  height: 80vh;
  margin-top: 28px;
`

const Content = styled.div`
  padding: 10px;
  margin: 10px 20px;
  border-radius: 15px;
  background-color: ${props => props.$walking ? "#d3d3d360" : "#52b33236"};
`

const H3 = styled.h3`
  margin: 0px 0px 5px 33px;
  padding-top: 20px;
  font-size: 25px;
  display: block;
`

const Type = styled.h4`
  margin: ${props => props.$walking ? "5px 10px" : "5px 10px 10px 10px"};
  font-size: 21px;
  display: block;
  color: ${props => props.$walking ? "#808080" : ""};
`

const H4 = styled.h4`
  width: ${props => props.$bus ? "20px" : ""};
  margin: 5px;
  margin-left: ${props => props.$bus ? "62px" : "12px"};
  font-size: 18px;
  display: block;
  text-align: ${props => props.$no ? "center" : ""};
`

const P = styled.p`
  color: ${props => props.$walking ? "#6a6a6a" : ""};
  margin: 5px 10px;
`

const Time = styled(P)`
  color: red;
  font-weight: 700;
  margin: 6.5px 10px 3.5px;
`

const Flex = styled.div`
  display: flex;
`

const Div = styled.div`
  width: 430px;
  overflow: hidden;
`

export default Path;