import * as S from "./styles";

interface ButtonInterface {
  text: string;
  icon?: any;
  onClick: any;
}

export const Button = ({ text, icon, onClick }: ButtonInterface) => {
  return (
    <>
      <S.Container onClick={onClick}>
        <S.Wrapper>
          {icon ? icon : <></>}
          <S.Text>{text}</S.Text>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
