"use client";
import { buildQueryString } from "@/utils/buildQueryString";
import { Box } from "../Box";
import { InputBox } from "../InputBox";
import * as S from "./styles";
import { useState } from "react";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { countNumbersOnString } from "@/utils/countNumbersOnString";
import { LoadingModal } from "../LoadingModal";

export const HomePage = () => {
  const [initialValue, setInitialValue] = useState("");
  const [monthlyContrib, setMonthlyContrib] = useState("");
  const [age, setAge] = useState("");
  const [monthFees, setMonthFees] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [initialValueError, setInitialValueError] = useState(false);
  const [monthlyContribError, setMonthlyContribError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [monthFeesError, setMonthFeesError] = useState(false);
  const [monthValueError, setmMonthValueError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    switch (id) {
      case "initialValue":
        setInitialValue(value);
        setInitialValueError(false);
        break;
      case "monthlyContrib":
        setMonthlyContrib(value);
        setMonthlyContribError(false);
        break;
      case "age":
        setAge(value);
        setAgeError(false);
        break;
      case "monthFees":
        setMonthFees(value);
        setMonthFeesError(false);
        break;
      case "monthValue":
        setMonthValue(value);
        setmMonthValueError(false);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    setHasError(false);
    if (initialValue.length <= 0 || countNumbersOnString(initialValue) === 0) {
      setInitialValueError(true);
      setHasError(true);
      return;
    }
    if (
      monthlyContrib.length <= 0 ||
      countNumbersOnString(monthlyContrib) === 0
    ) {
      setMonthlyContribError(true);
      setHasError(true);
      return;
    }
    if (age.length <= 0 || countNumbersOnString(age) === 0) {
      setAgeError(true);
      setHasError(true);
      return;
    }
    if (monthFees.length <= 0 || countNumbersOnString(monthFees) === 0) {
      setMonthFeesError(true);
      setHasError(true);
      return;
    }
    if (monthValue.length <= 0 || countNumbersOnString(monthValue) === 0) {
      setmMonthValueError(true);
      setHasError(true);
      return;
    }
    setIsLoading(true);
    router.push(
      `resultado?${buildQueryString(
        initialValue,
        monthlyContrib,
        age,
        monthFees,
        monthValue
      )}`
    );
  };

  return (
    <>
      <LoadingModal isOpen={isLoading} />
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
            hasbutton={true}
            buttonmessage={"Calcular"}
            onClick={handleClick}
            error={hasError}
          >
            <S.InputContainer>
              <InputBox
                error={initialValueError}
                id="initialValue"
                name="initialValue"
                value={initialValue}
                onChange={handleChange}
                type={"money"}
                placeholder="Qual o valor inicial?"
              />
              <Divider />
              <InputBox
                error={monthlyContribError}
                id="monthlyContrib"
                name="monthlyContrib"
                value={monthlyContrib}
                onChange={handleChange}
                type={"money"}
                placeholder="Qual a sua contribuição mensal?"
              />
              <Divider />
              <InputBox
                error={ageError}
                id="age"
                name="age"
                value={age}
                onChange={handleChange}
                type={"number"}
                placeholder="Qual a sua idade?"
              />
              <Divider />
              <InputBox
                error={monthFeesError}
                id="monthFees"
                name="monthFees"
                value={monthFees}
                onChange={handleChange}
                type={"percentage"}
                placeholder="Qual a taxa de juros mensal?"
              />
              <Divider />
              <InputBox
                error={monthValueError}
                id="monthValue"
                name="monthValue"
                value={monthValue}
                onChange={handleChange}
                type={"money"}
                placeholder="Quanto deseja receber ao mês?"
              />
              <Divider />
            </S.InputContainer>
          </Box>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
