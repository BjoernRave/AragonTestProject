import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Blocks from "../components/Blocks";
import useWindowScroll from "../lib/useWindowScroll";
import { isServer } from "../lib/utils";

const HomeWrapper = styled.main`
  padding: 0 5%;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px;
`;

const TopBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  padding: 10px 0 20px 0;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const Home: NextPage<Props> = ({ web3 }) => {
  const [lastBlocks, setLastBlocks] = useState<any[]>([]);
  const { y } = useWindowScroll();
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    (async () => {
      if (
        !isLoadingData &&
        (lastBlocks.length === 0 ||
          (!isServer && y + window.innerHeight > document.body.offsetHeight))
      ) {
        let lastBlock;

        if (lastBlocks.length === 0) {
          lastBlock = await web3.eth.getBlockNumber();
        } else {
          lastBlock = lastBlocks[lastBlocks.length - 1].number;
        }

        setIsLoadingData(true);

        const getBlockPromises: any[] = [];

        for (let i = lastBlock - 10; i < lastBlock; i++) {
          getBlockPromises.push(web3.eth.getBlock(i, true));
        }

        const newBlocks = await Promise.all(getBlockPromises);

        setLastBlocks([
          ...lastBlocks,
          ...newBlocks.sort((a, b) => b.number - a.number)
        ]);
        setIsLoadingData(false);
      }
    })();
  }, [y]);

  return (
    <HomeWrapper>
      <TopBar>
        <Banner>
          <Logo src="/ethereum.png" alt="Website Logo"></Logo>
          <h1>Ethereum Blocks Explorer</h1>
        </Banner>
      </TopBar>
      <Blocks lastBlocks={lastBlocks} isLoadingData={isLoadingData}></Blocks>
    </HomeWrapper>
  );
};

export default Home;

interface Props {
  web3: any;
}
