import React, { FC } from "react";
import styled from "styled-components";
import BlockItem from "./BlockItem";
import Loader from "./Loader";

const BlockItemList = styled.section`
  margin-top: 128.4px;
`;

const StyledLoader = styled(Loader)`
  margin: 0 auto;
  display: table;
`;

const TableDescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 0 5%;
  position: fixed;
  background-color: black;
  width: 90%;
  top: 100px;
  left: 0;
`;

const Blocks: FC<Props> = ({ lastBlocks, isLoadingData }) => {
  return (
    <>
      <BlockItemList>
        <TableDescriptionWrapper>
          <span>Block Nr.</span>
          <span>Creation Date</span>
          <span>Block Size</span>
          <span>Total Difficulty</span>
        </TableDescriptionWrapper>
        {lastBlocks.length > 0 ? (
          lastBlocks.map(block => (
            <BlockItem block={block} key={block.number}></BlockItem>
          ))
        ) : (
          <p>Loading Infos...</p>
        )}
      </BlockItemList>
      {isLoadingData && lastBlocks.length > 0 && <StyledLoader />}
    </>
  );
};

export default Blocks;

interface Props {
  lastBlocks: any[];
  isLoadingData: boolean;
}
