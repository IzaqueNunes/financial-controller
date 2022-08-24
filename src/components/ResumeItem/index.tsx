import * as S from "./style";

type Props = {
  title: string;
  value: number;
};

export const ResumeItem = ({ title, value }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Info>R$ {value}</S.Info>
    </S.Container>
  );
};
