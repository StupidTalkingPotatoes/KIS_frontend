import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Home/Header.js';
import Modal from './Modal.js';
import Map from "./Map.js";
import bus from '../../Images/bus.png';

function Location() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const saveValue = (event) => {
    setValue(event.target.value);
  }

  const onSearch = () => {
    <Modal value={value} />
    window.location.href = "/locationmodal"
  }

  useEffect(() => {
    Map();
  }, []);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://2a9908a5-f393-436e-86ea-49797d7a1d1f.mock.pstmn.io/api/routes/location?id=", requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  console.log(list);

  return (
    <>
      <Header />
      <Container>
        <Search>
          <Input
            type="text"
            placeholder="버스 번호를 검색하세요."
            value={value}
            onChange={saveValue}
          />
          <span class="material-symbols-outlined"
            style={{ position: "absolute", right: "40px", top: "20px",
              fontWeight: "600", color: "#53B332", cursor: "pointer"
            }}
            onClick={onSearch}
          >search</span>
        </Search>
        <Flex>
          <Mymap id='myMap'></Mymap>
          <Div>
            <Bus>
              <Flex>
                <Img src={bus} />
                <H3>{list.routeNo}번</H3>
                <P>구미역 방면</P>
              </Flex>
            </Bus>
            <Node>
              <Current>●</Current>
              <Line></Line>
              {list.passingNodeList && list.passingNodeList.map((item) =>
                <NodeItem>{item.name}</NodeItem>
              )}
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
`

const Node = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  height: 65.3vh;
  overflow: scroll;
`

const NodeItem = styled.p`
  font-size: 19px;
  padding: 25px 0px 28px 30px;
  margin: 0px 0px 0px 45px; 
  /* margin-left: 50px; */
  border-bottom: 1px solid #54734636;
`

const Current = styled.h2`
  position: absolute;
  top: 20px;
  left: 35px;
  margin: 0px;
  color: #53B332;
  text-shadow: -4px 0px #fff, 0px 4px #fff, 4px 0px #fff, 0px -4px #fff, 0 0 14px #000;
  border-radius: 100%;
  z-index: 9;
`

const Line = styled.div`
  position: absolute;
  border-left : 3px solid #547346;
  height : 575%;
  top: 0px;
  left: 45px;
  margin: 0px;
  padding: 0px;
  color: #547346;
  z-index: 1;
`

export default Location;