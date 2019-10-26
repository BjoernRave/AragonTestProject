import Link from "next/link";
import { SingletonRouter, withRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Transactions from "../../components/Transactions";

const BlockDetailsWrapper = styled.main`
  margin: 20px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  ${({ theme }) => theme.colors.preset.aragon};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: 10px;
  cursor: pointer;
  border: none;
  align-self: baseline;
`;

const BlockDetails: FC<Props> = ({
  router: {
    query: { number }
  },
  web3
}) => {
  const [blockDetails, setBlockDetails] = useState();

  useEffect(() => {
    (async () => {
      if (number) {
        const block = await web3.eth.getBlock(Number(number), true);

        setBlockDetails(block);
      }
    })();
  }, [number]);

  if (blockDetails === null) {
    return (
      <h1>
        We had problems getting details of that block or it doesn't exist.
      </h1>
    );
  }

  if (!blockDetails) {
    return <h1>Loading Details for Ethereum Block Nr.{number}</h1>;
  }

  return (
    <BlockDetailsWrapper>
      <Link href="/">
        <BackButton>Go Back</BackButton>
      </Link>
      <h1>Block Number: {number}</h1>
      <Transactions
        transactions={blockDetails.transactions.filter(
          transaction => transaction.value !== "0"
        )}
      ></Transactions>
    </BlockDetailsWrapper>
  );
};

export default withRouter(BlockDetails);

interface Props {
  router: SingletonRouter;
  web3: any;
}
