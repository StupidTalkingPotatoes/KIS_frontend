import React from 'react';
import styled from 'styled-components';

function Notice() {
  return (
    <Container>
      <H2>
        공지사항
      </H2>
      <Ul>
        <Li>저상버스 191번 운행 일시 중단 ...</Li>
        <Li>2047. 10. 29</Li>
      </Ul>
      <Ul>
        <Li>90번 버스 저상버스로  변경 ...</Li>
        <Li>2047. 02. 01</Li>
      </Ul>
      <Ul>
        <Li>저상버스 191번 운행 일시 중단 ...</Li>
        <Li>2045. 10. 29</Li>
      </Ul>
      <Ul>
        <Li>90번 버스 저상버스로  변경 ...</Li>
        <Li>2045. 08. 01</Li>
      </Ul>
    </Container>
  )
}

const Container = styled.div`
  width: 40%;
  color: #547346;
  margin: 5px 20px;
`

const H2 = styled.h2`
  padding: 0px;
  margin: 10px 0px;
`

const Ul = styled.ul`
  display: flex;
  font-size: 18px;
  padding: 0px;
  margin: 5px 0px;
  justify-content: space-between;
`

const Li = styled.li`
  list-style:none;
  padding: 5px 0px;
`

export default Notice;