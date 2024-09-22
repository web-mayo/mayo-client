import React from 'react'

export const Pagination = () => {
  return (
    <>
        <Box>
                <NumNow>1</NumNow>
                <Num>2</Num>
                <Num>3</Num>
                <Num>...</Num>
                <Num>67</Num>
                <Num>68</Num>
                <NextSign></NextSign>
                <NextSign2>
                  <NextSign></NextSign><NextSign></NextSign>
                </NextSign2>
              </Box>
    </>
  )
}


const Box = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NumNow = styled.div`
  font-size: 17px;
  border-radius: 10px;
  background-color: #FA7C15;
  padding: 8px 15px;
  color: white;
`

const Num = styled.div`
  font-size: 17px;
  padding: 8px 15px;
`

const NextSign = styled.div`
  content: '';
  width: 5.5px;
  height: 5.5px;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: rotate(45deg);
`

const NextSign2 = styled.div`
  display: flex;
  padding-left: 20px;
`
