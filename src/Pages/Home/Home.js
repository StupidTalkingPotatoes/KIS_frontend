import React from 'react';
import Header from './Header.js';
import BusStop from './BusStop.js';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <BusStop />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
`

export default Home;