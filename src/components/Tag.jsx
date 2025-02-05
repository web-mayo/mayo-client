import React from "react";
import styled from "styled-components";

export const Tag = ({ text }) => {
  return <TagBox>{text}</TagBox>;
};
const TagBox = styled.div`
  display: flex;
  padding: 6px 8.5px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  color: rgba(182, 92, 19, 0.5);
  border: 1px solid rgba(182, 92, 19, 0.5);
  font-size: 10px;
`;
