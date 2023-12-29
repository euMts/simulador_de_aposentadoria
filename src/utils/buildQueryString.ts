export function buildQueryString(
  initialValue: string,
  monthlyContrib: string,
  age: string,
  monthFees: string,
  monthValue: string
): string {
  const cleanInitialValue = initialValue.replace(/-/g, '');
  const cleanMonthlyContrib = monthlyContrib.replace(/-/g, '');
  const cleanAge = age.replace(/-/g, '');
  const cleanMonthFees = monthFees.replace(/-/g, '');
  const cleanMonthValue = monthValue.replace(/-/g, '');

  const queryParams = new URLSearchParams({
    initial_value: cleanInitialValue,
    monthly_contrib: cleanMonthlyContrib,
    age: cleanAge,
    month_fees: cleanMonthFees,
    month_value: cleanMonthValue,
  });

  return queryParams.toString();
}
