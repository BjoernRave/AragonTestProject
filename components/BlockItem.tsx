import dayjs from "dayjs";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

const BlockItemWrapper = styled.div`
  ${({ theme }) => theme.boxShadows.preset};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 20px 0;
  margin: 20px 0;
  cursor: pointer;
  ${({ theme }) => theme.colors.preset.aragon};
`;

const Date = styled.span``;

const BlockItem: FC<Props> = ({ block }) => (
  <Link href="/blocks/[number]" as={`/blocks/${block.number}`}>
    <BlockItemWrapper>
      <span>{block.number}</span>
      <Date>{dayjs(block.timestamp).format("DD.MM.YYYY - hh:mm:ss")}</Date>
      <span>{block.size}</span>
      <span>{block.totalDifficulty}</span>
    </BlockItemWrapper>
  </Link>
);

export default BlockItem;

interface Props {
  block: any;
}
