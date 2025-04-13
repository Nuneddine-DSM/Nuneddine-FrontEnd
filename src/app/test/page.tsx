import React from "react";
import styled from 'styled-components/native';

function Test() {
  return (
    <Container>
      <A>ㅇ</A>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const A = styled.Text``

export default Test