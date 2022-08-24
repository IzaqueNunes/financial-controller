import styled from "styled-components";

interface ThProps {
  width?: number;
}

export const Table = styled.table`
  font-family: "Poppins", sans-serif;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<ThProps>`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 10px 0;
  text-align: left;
`;
