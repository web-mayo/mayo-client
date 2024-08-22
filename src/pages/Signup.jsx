import React from 'react'
import styled from 'styled-components'

export const Signup = () => {
  return (
    <>
      <SignupContainer>
        <Container>
          <Title>고객 로그인</Title>
          <SocialLogins>
            <SocialLogin></SocialLogin>
          </SocialLogins>
          <IdInputLabel>아이디</IdInputLabel>
          <IdInput></IdInput>
          <PwInputLabel>비밀번호</PwInputLabel>
          <PwInput></PwInput>
          <LoginBtn></LoginBtn>
        </Container>
      </SignupContainer>
    </>
  )
}

const SignupContainer = styled.div`
  
`
const Container = styled.div`
  
`
const Title = styled.div`
  
`
const SocialLogins = styled.div`
  
`
const SocialLogin = styled.div`
  
`
const IdInputLabel = styled.div`
  
`
const IdInput = styled.input`
  
`
const PwInputLabel = styled.div`
  
`
const PwInput = styled.input`
  
`
const LoginBtn = styled.div`
  
`
