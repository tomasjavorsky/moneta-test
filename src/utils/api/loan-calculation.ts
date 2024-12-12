import { serverUrl } from "../../assets/values";

interface LoanCalculationParams {
  amount: number;
  months: number;
  insuranceIncluded: boolean;
}

interface LoanCalculationResponse {
  totalPayment: number;
  monthlyPayment: number;
}

export const getLoanCalculation = async ({
  amount,
  months,
  insuranceIncluded,
}: LoanCalculationParams): Promise<LoanCalculationResponse> => {
  const response = await fetch(
    `${serverUrl}/loan-calculation?amount=${amount}&months=${months}&insuranceIncluded=${insuranceIncluded}`
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};
