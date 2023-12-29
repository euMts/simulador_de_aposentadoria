import { formatCurrency } from "./formatCurrency";

interface MathMagicTypes {
  monthFeesRaw: string;
  initialValueRaw: string;
  monthValueRaw: string;
  monthlyContribRaw: string;
  ageRaw: string;
}

export function mathMagic({
  monthFeesRaw,
  initialValueRaw,
  monthValueRaw,
  monthlyContribRaw,
  ageRaw,
}: MathMagicTypes) {
  if (monthFeesRaw === "") {
    monthFeesRaw = "0";
  }
  if (initialValueRaw === "") {
    initialValueRaw = "0";
  }
  if (monthValueRaw === "") {
    monthValueRaw = "0";
  }
  if (monthlyContribRaw === "") {
    monthlyContribRaw = "0";
  }
  if (ageRaw === "") {
    ageRaw = "0";
  }

  const decimalFees = parseFloat(monthFeesRaw) * 0.01;
  let actualValue = parseFloat(initialValueRaw);
  const desiredValue = parseFloat(monthValueRaw) / decimalFees;
  let months = 0;

  while (actualValue < desiredValue) {
    actualValue =
      actualValue * (1 + decimalFees) + parseFloat(monthlyContribRaw);
    months += 1;
  }

  const years = months / 12;
  const finalAge = parseInt(ageRaw) + years;

  const formatedInitialValue = formatCurrency(initialValueRaw);
  const formatedMonthlyContribRaw = formatCurrency(monthlyContribRaw);
  const formatedYears = years.toFixed(0);
  const formatedFinalValue = isNaN(desiredValue)
    ? "0"
    : formatCurrency(desiredValue.toString());
  const formatedFinalAge = finalAge.toFixed(0);
  const formatedMonthValue = formatCurrency(monthValueRaw);

  return {
    formatedInitialValue,
    formatedMonthlyContribRaw,
    formatedYears,
    formatedFinalValue,
    formatedFinalAge,
    formatedMonthValue,
  };
}
