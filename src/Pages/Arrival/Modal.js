import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Home/Header.js';

function Modal({value}) {
  const [list, setList] = useState([]);
  const onCancel = () => {
    window.location.href = "/arrival"
  }

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://2a9908a5-f393-436e-86ea-49797d7a1d1f.mock.pstmn.io/api/nodes/search", requestOptions)
    .then(response => response.json())
    .then(result => setList(result))
    .catch(error => console.log('error :: ', error))  
  }, [])

  // console.log(list);
  console.log(value);

  return (
    <Div>
      <Header />
      <Container>
        <H2>
          "옥계중" 의 검색 결과
        </H2>
        <Fieldset>
          {list && list.map((item) => 
            <Label>
              <Input type="radio" name="option"/>
              <span>{item.name}</span>
            </Label>
          )}
        </Fieldset>
        <Flex>
          <Btn $primary>확인</Btn>
          <Btn onClick={onCancel}>취소</Btn>
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