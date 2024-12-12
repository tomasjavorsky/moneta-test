import { useTranslation } from "react-i18next";
import * as Yup from "yup";

interface ValidationSchemaProps {
  minAmount: number;
  maxAmount: number;
  minMonths: number;
  maxMonths: number;
}

export const useValidationSchema = ({
  maxAmount,
  maxMonths,
  minAmount,
  minMonths,
}: ValidationSchemaProps) => {
  const { t } = useTranslation();

  return Yup.object({
    amount: Yup.number()
      .typeError(t("validation.required"))
      .required(t("validation.required"))
      .min(minAmount, t("validation.min", { val: minAmount }))
      .max(maxAmount, t("validation.max", { val: maxAmount })),
    months: Yup.number()
      .typeError(t("validation.required"))
      .required(t("validation.required"))
      .min(minMonths, t("validation.min", { val: minMonths }))
      .max(maxMonths, t("validation.max", { val: maxAmount })),
    insuranceIncluded: Yup.boolean(),
  });
};
