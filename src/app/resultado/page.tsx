"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import GlobalStyle from "@/styles/global";
import { mathMagic } from "@/utils/mathMagic";
import { ResultPage } from "@/components/ResultPage";

const Result = () => {
  const searchParams = useSearchParams();
  let initialValueRaw = searchParams.get("initial_value") ?? "";
  const monthlyContribRaw = searchParams.get("monthly_contrib") ?? "";
  let ageRaw = searchParams.get("age") ?? "";
  const monthFeesRaw = searchParams.get("month_fees") ?? "";
  const monthValueRaw = searchParams.get("month_value") ?? "";

  const {
    formatedInitialValue,
    formatedMonthlyContribRaw,
    formatedYears,
    formatedFinalValue,
    formatedFinalAge,
    formatedMonthValue,
  } = mathMagic({
    monthFeesRaw,
    initialValueRaw,
    monthValueRaw,
    monthlyContribRaw,
    ageRaw,
  });

  return (
    <>
      <GlobalStyle />
      <ResultPage
        initialValue={formatedInitialValue}
        monthlyContrib={formatedMonthlyContribRaw}
        years={formatedYears}
        finalValue={formatedFinalValue}
        finalAge={formatedFinalAge}
        monthValue={formatedMonthValue}
        monthFee={monthFeesRaw}
      />
    </>
  );
};

export default Result;
