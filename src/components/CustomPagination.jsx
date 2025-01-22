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
