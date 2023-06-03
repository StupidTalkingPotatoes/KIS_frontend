import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from '../Home/Header.js';

function Modal() {
  const { routeNo } = useParams();
  const [list, setList] = useState([]);
  const [routeId, setRouteId] = useState("");

  const onSelect = (routeId) => { setRouteId(routeId); }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch(`http://119.56.230.204:506/api/routes/search?routeNo=${routeNo}`, requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  // console.log(list);

  return (
    <Div>
      <Header />
        <Container>
          <H2>
            "{routeNo}" 의 검색 결과
          </H2>
          <Fieldset>
            {list && list.map((item) => 
              <Label>
                <Input type="radio" name="option" onClick={() => onSelect(item.routeId)}/>
                <span>{item.routeNo}</span>
                <P>{item.startNode} → {item.endNode}</P>
              </Label>
            )}
          </Fieldset>
          <Flex>
            <Link to="/location" state={{ routeId: routeId }} style={{ margin: "auto" }}>
              <Btn $primary>
                확인
              </Btn>
            </Link>
            <Link to="/location" style={{ margin: "auto" }}>
              <Btn>
                취소
              </Btn>
            </Link>
          </Flex>
        </Container>
    </Div>
  )
}

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #00000080;
`

const Container = styled.div`
  width: 530px;
  border-radius: 25px;
  color: #547346;
  margin: auto;
  padding: 30px 0px;
  background-color: white;
`

const Fieldset = styled.fieldset`
  &::-webkit-scrollbar {
    display: none;
  }

  border: 0px;  
  height: 370px;
  overflow: scroll;
`

const Label = styled.label`
  display: block;
  color: #53B332;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #e1f8d44a;
`

const Btn = styled.button`
  color: ${prop => prop.$primary? "white" : "#53B332"};
  background-color: ${prop => prop.$primary ? "#53B332" : "white"};
  
  width: 170px;
  margin: auto;
  padding: 10px 0px;
  font-size: 17px;
  font-weight: 800;
  border: 2px solid #53B332;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Input = styled.input.attrs({ type: 'radio' })`
  &:checked {
    border: 0.4em solid #547346;
  }

  &:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) dotted #547346;
  }

  width: 18px;
  height: 18px;
  color: #547346;
  margin-top: 3px;
  margin-right: 10px;
  border: 2px solid #547346;
`

const P = styled.p`
  margin: 10px 0px 0px 33px;
`

const H2 = styled.h2`
  display: block;
  margin: 0px;
  padding: 0px 20px 20px 30px;
  font-size: 25px;
  border-bottom: 1px solid #C6C6C6;
`

const Flex = styled.div`
  display: flex;
`

export default Modal;