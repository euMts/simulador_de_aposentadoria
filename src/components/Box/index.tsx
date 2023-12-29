import { primaryRed } from "@/styles/colors";
import * as S from "./styles";

interface BoxInterface {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  hasbutton?: boolean;
  buttonmessage?: string;
  onClick?: any;
  error?: boolean;
}

export const Box = ({
  children,
  title,
  subTitle,
  hasbutton,
  buttonmessage,
  onClick,
  error,
}: BoxInterface) => {
  return (
    <>
      <S.Container>
        <S.Wrapper hasbutton={String(hasbutton)}>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
            {children}
            {error ? (
              <S.SubTitle style={{ color: primaryRed, marginBottom: 0 }}>
                * Preencha todos os campos com números.
              </S.SubTitle>
            ) : (
              <></>
            )}
          </S.Content>
        </S.Wrapper>
        {hasbutton ? (
          <S.Button onClick={onClick} type="submit">
            <S.Title white={"true"}>
              {buttonmessage ? buttonmessage : "Calcular"}
            </S.Title>
          </S.Button>
        ) : (
          <></>
        )}
      </S.Container>
    </>
  );
};
