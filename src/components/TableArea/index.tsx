import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";

import * as S from "./styles";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  {
    console.log("LISTA:", list);
  }
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Título</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </S.Table>
  );
};
