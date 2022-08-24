import { useState, useEffect } from "react";

import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

import * as S from "./App.styles";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

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
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* Área de inserção */}
        {/* Tabela de gastos */}
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
};

export default App;
