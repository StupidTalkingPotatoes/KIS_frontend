/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import Header from "../Home/Header";

function Path() {
  const { kakao } = window; 
  const [list, setList] = useState([]);
  const [departure, setDeparture] = useState("");
  const [departureSelected, setDepartureSelected] = useState({});
  const [destination, setDestination] = useState("");
  const [destinationSelected, setDestinationSelected] = useState({});
  const [departureList, setDepartureList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [departureOption, setDepartureOption] = useState(false);
  const [destinationOption, setDestinationOption] = useState(false);
  const requestOptions = { method: 'GET', redirect: 'follow' };
  
  const onDepartureChange = (e) => { setDeparture(e.target.value); }
  const onDestinationChange = (e) => { setDestination(e.target.value); }

  const onDepartureClick = () => {
    setDepartureOption(!departureOption);
    var ps = new kakao.maps.services.Places();   // 장소 검색 객체를 생성합니다
    ps.keywordSearch(departure, placesSearchCB); // 키워드로 장소를 검색합니다

    function placesSearchCB (data, status, pagination) { // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      if (status === kakao.maps.services.Status.OK) {
        {data && data.map((items) => {if (items.address_name.slice(0, 6) == "경북 구미시") { setDepartureList(data); } })}
      } 
    }
  }
  const onDestinationClick = () => {
    setDestinationOption(!destinationOption);
    var ps = new kakao.maps.services.Places();
    ps.keywordSearch(destination, placesSearchCB);

    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        {data && data.map((items) => { if (items.address_name.slice(0, 6) == "경북 구미시") { setDestinationList(data); } }) }
      } 
    }
  }

  const onDepartureSelect = (place_name, latitude, longitude) => {
    setDepartureOption(!departureOption);
    setDepartureSelected({ place_name: place_name, latitude: latitude, longitude: longitude });
  }
  const onDestinationSelect = (place_name, latitude, longitude) => { 
    setDestinationOption(!destinationOption);
    setDestinationSelected({ place_name: place_name, latitude: latitude, longitude: longitude });
  }

  useEffect(() => {
    if(destinationSelected != undefined) {
      fetch(`http://119.56.230.204:506/paths?departureLongitude=${departureSelected.longitude}&departureLatitude=${departureSelected.latitude}&arrivalLongitude=${destinationSelected.longitude}&arrivalLatitude=${destinationSelected.latitude}`, requestOptions)
      .then(response => response.json())
      .then(result => { setList(result); })
      .catch(error => console.log('error :: ', error));
    }
  }, [destinationSelected]);

  // console.log(list);
  // console.log(departureList);
  // console.log(departureSelected);
  // console.log(destinationSelected);

  return (
    <>
      <Header />
      <Container>
        <Flex>
          {list && 
            <Mymap>
              <Map
                departureLatitude={departureSelected.latitude}
                departureLongitude={departureSelected.longitude}
                destinationLatitude={destinationSelected.latitude}
                destinationLongitude={destinationSelected.longitude}
              />
            </Mymap>
          }
          <Div>
            <Search>
              <Input type="text" placeholder="출발지를 입력하세요." onChange={onDepartureChange} value={departureSelected.place_name}/>
              <span class="material-symbols-outlined"
                style={{ position: "absolute", right: "10px", top: "35px", fontWeight: "600", color: "#53B332", cursor: "pointer" }}
                onClick={onDepartureClick}
              >search</span>
              <SearchResult $departure isActive={departureOption}>
                {departureList && departureList.map((items) => {
                  return (
                    <Label>
                      <Flex>
                        <Radio $radio type="radio" name="option" onClick={() => onDepartureSelect(items.place_name, items.y, items.x)} />
                        <P $place>{items.place_name}</P>
                        <P $address>ㅤ{items.address_name.slice(7, items.address_name.length)}</P>
                      </Flex>
                    </Label>
                  )
                })}
              </SearchResult>
              <Input type="text" placeholder="도착지를 입력하세요." onChange={onDestinationChange} value={destinationSelected.place_name}/>
              <span class="material-symbols-outlined"
                style={{ position: "absolute", right: "10px", top: "100px", fontWeight: "600", color: "#53B332", cursor: "pointer" }}
                onClick={onDestinationClick}
                >search</span>
              <SearchResult $destination isActive={destinationOption}>
                {destinationList && destinationList.map((items) => {
                  return (
                    <Label>
                      <Flex>
                        <Radio $radio type="radio" name="option" onClick={() => onDestinationSelect(items.place_name, items.y, items.x)} />
                        <P $place>{items.place_name}</P>
                        <P $address>ㅤ{items.address_name.slice(7, items.address_name.length)}</P>
                      </Flex>
                    </Label>
                  )
                })}
              </SearchResult>
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
  width: 80%;
  margin: 35px 20px 5px 14px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const SearchResult = styled.fieldset`
  &::-webkit-scrollbar {
    display: none;
  }

  display: ${props => props.isActive ? "block" : "none"};
  position: absolute;
  top: ${props => props.destination ? "75px" : "140px"};
  left: 13px;
  width: 95%;
  padding: 8px 5px;
  height: 163px;
  color: #547346;
  font-weight: 600;
  text-align: left;
  background-color: white;
  border: 3px solid #53B332;
  border-radius: 10px;
  z-index: 9;
  overflow: scroll;
`

const Input = styled.input`
  outline: none;
  width: ${props => props.$radio ? "" : "90%"};
  height: ${props => props.$radio ? "18px" : "30px"};
  font-size: 18px;
  margin: 15px 0px 5px 5px;
  padding: 5px 20px;
  border: 3px solid #53B332;
  border-radius: 50px;
`

const Radio = styled.input`
  outline: none;
  font-size: 20px;
  margin: 10px 0px 10px 10px;
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

const Label = styled.label`
  display: block;
  color: #53B332;
  font-weight: 600;
  border-radius: 10px;
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
  width: ${props => props.$place ? "56.5%" : ""};
  color: ${props => props.$address ? "#6a6a6a" : props.$walking ? "#6a6a6a" : ""};
  font-size: ${props => props.$address ? "12px" : ""};
  font-weight: ${props => props.$address ? "400" : ""};
  margin: ${props => props.$place ? "7px 8px 3px" : props.$address ? "11px 0px 0px 0px" : "7px 10px 3px"};
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