import React from 'react';
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

export const CustomPagination = ({ totalPage, currentPage, setCurrentPage }) => {
  // pagination color change
  const theme = {
    "& .Mui-selected": {
      backgroundColor: "rgba(250, 124, 21, 1) !important",
      color: "#ffffff !important",
    },
  };

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <PaginationBox>
      <Pagination
        showLastButton
        count={totalPage}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
        sx={theme}
      />
    </PaginationBox>
  );
};

const PaginationBox = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: fit-content;
`;

const Box = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumNow = styled.div`
  font-size: 17px;
  border-radius: 10px;
  background-color: #fa7c15;
  padding: 8px 15px;
  color: white;
`;

const Num = styled.div`
  font-size: 17px;
  padding: 8px 15px;
`;

const NextSign = styled.div`
  content: '';
  width: 5.5px;
  height: 5.5px;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: rotate(45deg);
`;

const NextSign2 = styled.div`
  display: flex;
  padding-left: 20px;
`;
