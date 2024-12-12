import styles from "./loanCalculator.module.css";
import { Card, Checkbox, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { values } from "../../assets/values";
import AmountSlider from "../../components/AmountSlider/AmountSlider";
import NumberInput from "../../components/NumberInput/NumberInput";

export default function LoanCalculator() {
  const { t } = useTranslation();

  const [amount, setAmount] = useState<number>(20000);
  const [months, setMonths] = useState<number>(24);
  const [insuranceIncluded, setInsuranceIncluded] = useState<boolean>(true);

  useEffect(() => {
    console.log(
      "amount",
      amount,
      "months",
      months,
      "insuranceIncluded",
      insuranceIncluded
    );
  }, [amount, months, insuranceIncluded]);

  return (
    <Card>
      <div className={styles.container}>
        <Typography level="h1">{t("title")}</Typography>
        <div>
          <div className={styles.inputContainer}>
            <AmountSlider
              min={values.loan.min}
              max={values.loan.max}
              title={t("howMuch")}
              unit={t("currency")}
              value={amount}
              setter={setAmount}
            />
            <NumberInput value={amount} setter={setAmount} />
          </div>
          <div className={styles.inputContainer}>
            <AmountSlider
              min={values.loan.minDuration}
              max={values.loan.maxDuration}
              title={t("howLong")}
              unit={t("months")}
              value={months}
              setter={setMonths}
            />
            <NumberInput value={months} setter={setMonths} />
          </div>
        </div>
        <div>
          <Typography level="h3">{t("insolvencyInsurance")}</Typography>
          <div className={styles.inputContainer}>
            <Checkbox
              checked={insuranceIncluded}
              label={t("withInsurance")}
              onChange={() => setInsuranceIncluded(true)}
            />
            <Checkbox
              checked={!insuranceIncluded}
              label={t("withoutInsurance")}
              onChange={() => setInsuranceIncluded(false)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
