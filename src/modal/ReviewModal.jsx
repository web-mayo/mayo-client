import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchChefPartyReview } from "../apis/chefPartyApply";
import { useGetChefId } from "../hooks/useUserId";

export const ReviewModal = ({ onClose, selectedId }) => {
    const chefId = useGetChefId();
    const [review, setReview] = useState({});
    // const dummy = {
    //   "id": 0,
    //   "rating": 0,
    //   "ratingReason": "string",
    //   "review": "맛나",
    //   "createdAt": "2020-02-20-11:00..",
    //   "reviewFoodList": [
    //     "플레이팅", "최고"
    //   ],
    //   "reviewServiceList": [
    //     "서비스도", "최고"
    //   ]
    // };

  useEffect(()=>{
    const getReview = async() => {
      const result = await fetchChefPartyReview(chefId, parseInt(selectedId));
      setReview(result);
    }
    getReview();
  },[])

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
                    <Date>{review.createdAt?.substring(0,10)}</Date>
                </UserProfileContainer>
                <Text>
                {review.review}
                </Text>
            </TextContainer>
            <TagContainer>
                <TagContent>
                    <TagTitle><span style={{ color: "#FA7C15"}}>'서비스' </span>관련 태그 후기</TagTitle>
                    <TagList>
                        {review?.reviewServiceList.map((tag)=>(
                          <Tag>{tag}</Tag>
                        ))}
                    </TagList>
                </TagContent>
                <TagContent>
                    <TagTitle><span style={{ color: "#FA7C15"}}>'음식' </span>관련 태그 후기</TagTitle>
                    <TagList>
                        {review?.reviewFoodList.map((tag)=>(
                          <Tag>{tag}</Tag>
                        ))}
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