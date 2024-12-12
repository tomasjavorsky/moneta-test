import styles from "./loanCalculator.module.css";
import { Button, Card, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { values } from "../../assets/values";
import LoanSlider from "../../components/LoanSlider/LoanSlider";
import NumberInput from "../../components/NumberInput/NumberInput";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidationSchema } from "./validationSchema";
import DualCheckbox from "../../components/LoanInsurance/LoanInsurance";
import PhoneIcon from "../../components/Icons/Phone";

export default function LoanCalculator() {
  const { t } = useTranslation();
  const { loan } = values;
  const validationSchema = useValidationSchema({ ...loan });

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      amount: 20000,
      months: 24,
      insuranceIncluded: true,
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <Card>
      <FormProvider {...methods}>
        <form>
          <div className={styles.container}>
            <div className={styles.controlsContainer}>
              <Typography level="h1">{t("title")}</Typography>
              <div className={styles.inputContainer}>
                <LoanSlider
                  name="amount"
                  min={loan.minAmount}
                  max={loan.maxAmount}
                  title={t("howMuch")}
                  unit={t("currency")}
                />
                <NumberInput name="amount" />
              </div>
              <div className={styles.inputContainer}>
                <LoanSlider
                  name="months"
                  min={loan.minMonths}
                  max={loan.maxMonths}
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
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.innerPriceContainer}>
                <Typography
                  sx={{ color: "white", fontWeight: "bold" }}
                  level="h4"
                >
                  {t("monthlyPayments")}
                </Typography>
                <Typography
                  sx={{ color: "white", fontWeight: "bold" }}
                  level="h1"
                >
                  {`${t("currency")}`}
                </Typography>
              </div>
              <div className={styles.innerPriceContainer}>
                <Button
                  size="lg"
                  sx={{
                    backgroundColor: "#3FB360",
                    color: "white",
                    textDecoration: "underline",
                    borderRadius: 4,
                  }}
                >
                  {t("continue")}
                </Button>
                <div className={styles.rowContainer}>
                  <PhoneIcon />
                  <Typography
                    level="body-xs"
                    sx={{ color: "white", textDecoration: "underline" }}
                  >
                    {t("orWeCall")}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Card>
  );
}
