import React, { FC } from "react";
import styled, { css } from "styled-components";
const Web3 = require("web3");

const TransactionsWrapper = styled.section``;

const TransactionsHeader = styled.h3`
  font-size: 40px;
  margin: 20px auto;
  display: table;
`;

const RowStyle = css`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  justify-items: center;
  margin: 10px;
  padding: 10px;
`;

const TransactionWrapper = styled.div`
  ${RowStyle};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  ${({ theme }) => theme.colors.preset.aragon};
`;

const TransactionsDescription = styled.div`
  ${RowStyle};
  position: sticky;
  top: 0;
  background-color: black;
`;

const Transactions: FC<Props> = ({ transactions }) => (
  <TransactionsWrapper>
    <TransactionsHeader>Transactions</TransactionsHeader>
    <TransactionsDescription>
      <span>From</span>
      <span>To</span>
      <span>Gas</span>
      <span>Value in Ether</span>
    </TransactionsDescription>
    {transactions.map(transaction => (
      <TransactionWrapper key={transaction.hash}>
        <span> {transaction.from}</span>
        <span>{transaction.to ? transaction.to : "-"}</span>
        <span>{transaction.gas}</span>
        <span>{Web3.utils.fromWei(transaction.value)}</span>
      </TransactionWrapper>
    ))}
  </TransactionsWrapper>
);

export default Transactions;

interface Props {
  transactions: any[];
}
