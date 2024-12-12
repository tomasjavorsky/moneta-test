import styles from "./loanCalculator.module.css";
import { Card, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { loanValues } from "../../assets/values";
import LoanSlider from "../../components/LoanSlider/LoanSlider";
import NumberInput from "../../components/NumberInput/NumberInput";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidationSchema } from "./validationSchema";
import DualCheckbox from "../../components/LoanInsurance/LoanInsurance";
import PriceCard from "../../components/PriceCard/PriceCard";
import Declaimer from "../../components/Declaimer/Declaimer";
import { useLoanData } from "../../utils/useLoanData";

export default function LoanCalculator() {
  const { t } = useTranslation();
  const { minAmount, maxAmount, maxMonths, minMonths } = loanValues;
  const validationSchema = useValidationSchema({ ...loanValues });

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      amount: 20000,
      months: 24,
      insuranceIncluded: true,
    },
    resolver: yupResolver(validationSchema),
  });
  const formValues = methods.watch();
  const { data, isSuccess, isPending } = useLoanData(formValues);

  return (
    <FormProvider {...methods}>
      <Card>
        <form>
          <div className={styles.container}>
            <div className={styles.controlsContainer}>
              <Typography level="h1">{t("title")}</Typography>
              <div className={styles.inputContainer}>
                <LoanSlider
                  name="amount"
                  min={minAmount}
                  max={maxAmount}
                  title={t("howMuch")}
                  unit={t("currency")}
                />
                <NumberInput name="amount" />
              </div>
              <div className={styles.inputContainer}>
                <LoanSlider
                  name="months"
                  min={minMonths}
                  max={maxMonths}
                  title={t("howLong")}
                  unit={t("months")}
                />
                <NumberInput name="months" />
              </div>
              <Typography level="h3">{t("insolvencyInsurance")}</Typography>
              <DualCheckbox
                name="insuranceIncluded"
                firstLabel={t("withInsurance")}
                secondLabel={t("withoutInsurance")}
              />
              <Declaimer
                isSuccess={isSuccess}
                isPending={isPending}
                totalPayment={data?.totalPayment ?? 22258}
              />
            </div>
            <PriceCard
              isSuccess={isSuccess}
              isPending={isPending}
              monthlyPayment={data?.monthlyPayment ?? 927}
            />
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
