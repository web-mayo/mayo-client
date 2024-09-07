import React from 'react'
import styled from 'styled-components'

export const Title = ({title, subTitle, backgroundColor}) => {
  return (
    <TitleContainer backgroundColor={backgroundColor}>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subTitle}</SubTitleText>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 118px;
    gap: ${props=> (props.subTitle) ? '10px' : '0px'};
    background-color: ${props => props.backgroundColor === 'white' ? 'white' : props.theme.sub};
    justify-content: center;
    align-items: center;
`
const TitleText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 23px;
    font-weight: 600;
`

const SubTitleText = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
`
