import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Header from '../Home/Header.js';

function Modal() {
  let { search } = useParams();
  const location = useLocation(); 
  const selected = location.state?.selected;
  const [list, setList] = useState([]);
  const [id, setId] = useState();

  const onSelect = (id) => { setId(id) }

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    selected == "정류장번호" ? (
      fetch(`http://119.56.230.204:506/api/nodes/search?no=${search}`, requestOptions)
        .then(response => response.json())
        .then(result => setList(result))
        .catch(error => console.log('error :: ', error))
    ) : (
      fetch(`http://119.56.230.204:506/api/nodes/search?name=${search}`, requestOptions)
        .then(response => response.json())
        .then(result => setList(result))
        .catch(error => console.log('error :: ', error))
    )
  }, [])

  console.log("list :: ", list);
  // console.log("id :: ", id);
  
  return (
    <Div>
      <Header />
      <Container>
        <H2>
          "{search}" 의 검색 결과
        </H2>
        <Fieldset>
          {list && list.map((item) => 
            <Label>
              <Input type="radio" name="option" onChange={() => onSelect(item.id)}/>
              <span>{item.name}</span>
            </Label>
          )}
        </Fieldset>
        <Flex>
          <Link to="/arrival" state={{ id: id }} style={{ margin: "auto" }}>
            <Btn $primary>확인</Btn>
          </Link>
          <Link to="/arrival" style={{ margin: "auto" }}>
            <Btn>취소</Btn>
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
  width: 450px;
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
  height: 315px;
  overflow: scroll;
`

const Label = styled.label`
  display: block;
  color: #53B332;
  font-size: 20px;
  font-weight: 600;
  margin: 25px 10px;
  padding: 25px 20px;
  border-radius: 10px;
  background-color: #e1f8d44a;
`

const Btn = styled.button`
  color: ${prop => prop.$primary? "white" : "#53B332"};;
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
    color: #547346;
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