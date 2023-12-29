"use client";
import * as S from "./styles";
import { Box } from "../Box";
import { Divider } from "@mui/material";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import { ShareModal } from "../ShareModal";
import { useState } from "react";

interface ResultPageProps {
  initialValue: string;
  monthlyContrib: string;
  years: string;
  finalValue: string;
  finalAge: string;
  monthValue: string;
  monthFee: string;
}

export const ResultPage = ({
  initialValue,
  monthlyContrib,
  years,
  finalValue,
  finalAge,
  monthValue,
  monthFee,
}: ResultPageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentUrl = window.location.href;

  const handleReturn = () => {
    router.push("/");
  };

  const handleShare = () => {
    handleOpen();
    console.log(currentUrl);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ShareModal isOpen={isOpen} onClose={handleClose} shareUrl={currentUrl} />
      <S.Container>
        <S.Background>
          <S.BackgroundItem1 />
          <S.BackgroundItem2 />
          <S.BackgroundItem3 />
          <S.BackgroundItem4 />
          <S.BackgroundItem5 />
        </S.Background>
        <S.Wrapper>
          <Box
            title={"Simulador de Aposentadoria"}
            subTitle={"*valores estimados desconsiderando a inflação"}
            hasbutton={false}
            onClick={() => console.log("oi")}
          >
            <S.ResultContainer>
              <S.Line>
                <S.Text>Valor inicial:</S.Text>
                <S.Value bold="true">{initialValue}</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.Line>
                <S.Text>Investimento mensal:</S.Text>
                <S.Value bold="true">{monthlyContrib}</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.Line>
                <S.Text>Prazo estimado:</S.Text>
                <S.Value bold="true">{years} anos</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.Line>
                <S.Text>Montante final:</S.Text>
                <S.Value bold="true">{finalValue}</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.Line>
                <S.Text>Aposentadoria estimada:</S.Text>
                <S.Value bold="true">{finalAge} anos</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.Line>
                <S.Text>Rendimento mensal:</S.Text>
                <S.Value bold="true">{monthValue}</S.Value>
              </S.Line>
              <Divider flexItem />
              <S.ResultContainer>
                <S.UnderText>
                  Em um investimento que rende{" "}
                  <p style={{ display: "inline", fontWeight: 600 }}>
                    {monthFee}%
                  </p>{" "}
                  ao <p style={{ display: "inline", fontWeight: 600 }}>mês</p>
                </S.UnderText>
              </S.ResultContainer>
            </S.ResultContainer>
          </Box>
          <S.ButtonGroup>
            <Button
              text={"Voltar"}
              onClick={handleReturn}
              icon={<S.ReturnIcon />}
            />
            <Button text={"Compartilhar"} onClick={handleShare} />
          </S.ButtonGroup>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
