import { useState, useEffect } from "react";

import { Item } from "./types/Item";
import { Category } from "./types/Category";

import { items } from "./data/items";
import { categories } from "./data/categories";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

import * as S from "./App.styles";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema de Controle Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>
        {/* Área de informações */}
        {/* Área de inserção */}
        {/* Tabela de gastos */}
      </S.Body>
    </S.Container>
  );
};

export default App;
