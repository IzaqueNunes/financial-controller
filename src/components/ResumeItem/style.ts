import styled from "styled-components";

interface Props {
  color?: string;
}

export const Container = styled.div`
  flex: 1;
`;
export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`;
export const Info = styled.div<Props>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "#000")};
`;
