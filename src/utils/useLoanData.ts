import { useQuery } from "@tanstack/react-query";
import { getLoanCalculation } from "./api/loan-calculation";

interface UseLoanDataProps {
  amount: number;
  months: number;
  insuranceIncluded: boolean;
}

export function useLoanData({
  amount,
  months,
  insuranceIncluded,
}: UseLoanDataProps) {
  return useQuery({
    queryFn: () => getLoanCalculation({ amount, months, insuranceIncluded }),
    queryKey: [
      "loan-calculation",
      {
        amount,
        months,
        insuranceIncluded,
      },
    ],
    staleTime: 1000 * 60 * 10,
  });
}
