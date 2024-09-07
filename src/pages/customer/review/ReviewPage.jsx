import React from 'react'
import styled from 'styled-components'

export const ReviewPage = () => {
  return (
    <>
      <Container>
        <TitleBox>
          <Title>후기 작성</Title>
        </TitleBox>
        <Container1>
          <Container2>

          </Container2>
          <Container3>
            <SelectBox>
              <ServiceBox>

              </ServiceBox>
              <FoodBox>

              </FoodBox>
            </SelectBox>
            <EvaluationBox>
              <ScoreTop>
                <ScoreTitle>비공개 평점</ScoreTitle>
                <ExtraText>{'('}평점은 관리자만 확인 가능합니다. 해당 정보는 매칭 및 추천 시스템에 사용됩니다.{')'}</ExtraText>
              </ScoreTop>
              <ScoreMiddle>
                <Number>
                  <Min>0</Min>
                  <Max>100</Max>
                </Number>
                <Range min="0" max="100"></Range>
              </ScoreMiddle>
              <ScoreBottom>
                <Reason>평점의 이유{'('}선택{')'}</Reason>
                <TextBox>평점의 이유를 작성해주세요.</TextBox>
              </ScoreBottom>
            </EvaluationBox>
          </Container3>
          <Container4>
            <ReviewTitle>후기 남기기</ReviewTitle>
            <TextBox2>후기를 자유롭게 남겨주세요!</TextBox2>
          </Container4>
        </Container1>
        <BottomContainer>
          <Button>
            <ButtonText>후기 제출</ButtonText>
          </Button>
        </BottomContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 1057px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleBox = styled.div`
  width: 1192px;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
`

const Container1 = styled.div`
  width: 1147px;
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Container2 = styled.div`
  width: 1147px;
  height: 180px;
  border-radius: 8px;
  background: #FFFFFF;
`

const Container3 = styled.div`
  width: 1147px;
  height: 370px;
  display: flex;
  justify-content: space-between;
`

const SelectBox = styled.div`
  width: 732px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ServiceBox = styled.div`
  width: 732px;
  height: 177px;
  border-radius: 8px;
  background: #FFFFFF;
`

const FoodBox = styled.div`
  width: 732px;
  height: 177px;
  border-radius: 8px;
  background: #FFFFFF;
`

const EvaluationBox = styled.div`
  width: 328px;
  height: 316px;
  border-radius: 8px;
  background: #FFFFFF;
  padding: 27px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ScoreTop = styled.div`
  width: 328px;
  height: 50px;
  display: flex;
  flex-direction: column;
`

const ScoreTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 5px;
`

const ExtraText = styled.div`
  color: #919191;
  font-size: 8.7px;
`

const ScoreMiddle = styled.div``

const Number = styled.div`
  display: flex; 
  justify-content: space-between;       
`

const Min = styled.div``

const Max = styled.div``

const Range = styled.input.attrs({type: 'range'})`
  -webkit-appearance: none;
  width: 328px;
  height: 6px;
  background: #f9d3b2; /* 트랙의 배경색 */
  border-radius: 5px;
  outline: none;
  transition: background 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ff7f0e; /* 손잡이 색상 */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px; /* 트랙 중앙에 맞추기 위한 margin */
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ff7f0e;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: #f9d3b2; /* 트랙의 배경색 */
    border-radius: 5px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 6px;
    background: #f9d3b2;
    border-radius: 5px;
  }
`

const ScoreBottom = styled.div`
  display: flex;
  flex-direction: column;
`

const Reason = styled.div`
  padding-bottom: 8px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
`

const TextBox = styled.div`
  width: 318px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  color: #929292;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 15px;
`

const Container4 = styled.div`
  width: 1100px;
  height: 170px;
  border-radius: 8px;
  background: #FFFFFF;
  padding: 25px;
`

const ReviewTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;
`

const TextBox2 = styled.div`
  width: 1090px;
  height: 110px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  color: #929292;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 15px;
`

const BottomContainer = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  width: 307px;
  height: 48px;
  border-radius: 8px;
  background: #FA7C15;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.div`
  color: white;
  font-weight: 600;
`