import React from "react";
import styled from "styled-components";

export const ReviewModal = ({ onClose }) => {
  return (
    <Overlay>
      <Modal>
        <Title>
          <TitleText>고객님이 이런 후기를 남겨주셨습니다!</TitleText>
        </Title>
        <ContentContainer>
            <TextContainer>
                <UserProfileContainer>
                    <UserInfo>
                        <UserImg></UserImg>
                        <UserName>Customer</UserName>
                    </UserInfo>
                    <Date>2024/08/31</Date>
                </UserProfileContainer>
                <Text>
                맛있게 잘 먹었어요! 코스 구성도 완벽했습니다! 덕분에 특별한 하루가 되었습니다.
                </Text>
            </TextContainer>
            <TagContainer>
                <TagContent>
                    <TagTitle><span style={{ color: "#FA7C15"}}>'서비스' </span>관련 태그 후기</TagTitle>
                    <TagList>
                        <Tag>위생적이에요</Tag>
                        <Tag>친젏ㅁ</Tag>
                        <Tag>위생적이에요</Tag>
                        <Tag>친젏ㅁ</Tag>
                        <Tag>위생적이에요</Tag>
                        <Tag>친젏ㅁ</Tag>
                        <Tag>위생적이에요</Tag>
                    </TagList>
                </TagContent>
                <TagContent>
                    <TagTitle><span style={{ color: "#FA7C15"}}>'음식' </span>관련 태그 후기</TagTitle>
                    <TagList>
                        <Tag>특별</Tag>
                        <Tag>양이많앙</Tag>
                        <Tag>플레이팅</Tag>
                    </TagList>
                </TagContent>
            </TagContainer>
            <CloseButton onClick={onClose}>닫기</CloseButton>
        </ContentContainer>
      </Modal>
    </Overlay>
  );
};


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  border-radius: 8px;
  width: 500px;
  //padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  background-color: ${(props) => props.theme.sub};
  width: 100%;
  text-align: center;
  border-radius: 8px 8px 0px 0px;

`;

const TitleText = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 13px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`
const TextContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    background-color: #FFF3EA;
    padding: 20px 30px;
    border-radius: 8px;
    gap: 10px;
`
const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //align-items: center;

`
const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
`
const UserImg = styled.img`
    border-radius: 32px;
    background-color: #B65C134D;
    width: 25px;
    height: 25px;
`
const UserName = styled.div`
    font-size: 16px;
    font-weight: 700;
`
const Date = styled.div`
    
`
const Text = styled.div`
    font-size: 16px;
    font-weight: 500;
    //align-self: flex-start;
    margin-left: 32px;
`

const TagContainer = styled.div`
    width: 85%;
    background-color: #FFF3EA;
    padding: 20px 30px;
    margin-top: 20px;
    gap: 13px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

`
const TagContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const TagTitle = styled.div`
    font-weight: 600;
`
const TagList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;

`
const Tag = styled.div`
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    background-color: #B65C134D;
    padding: 6px 15px;
    border-radius: 8px;
`

const CloseButton = styled.button`
  background: white;
  color: black;
  padding: 5px;
  border: 1.5px solid black ;
  width: 70px;
  //border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;

  /* &:hover {
    background: #d98852;
  } */
`;