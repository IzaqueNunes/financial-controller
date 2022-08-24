import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

import * as S from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month), -1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month), 1);
    currentDate.setMonth(currentDate.getMonth());
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthArrow onClick={handlePrevMonth}>
          <BsFillArrowLeftSquareFill />
        </S.MonthArrow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthArrow onClick={handleNextMonth}>
          <BsFillArrowRightSquareFill />
        </S.MonthArrow>
      </S.MonthArea>

      <S.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} />
      </S.ResumeArea>
    </S.Container>
  );
};
