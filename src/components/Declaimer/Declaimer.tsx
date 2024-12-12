import { Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import styles from "./declaimer.module.css";
import { useFormContext } from "react-hook-form";

interface DeclaimerProps {
  totalPayment: number;
  isSuccess: boolean;
  isPending: boolean;
}

export default function Declaimer({
  totalPayment,
  isSuccess,
  isPending,
}: DeclaimerProps) {
  const { t } = useTranslation();
  const { watch } = useFormContext();
  const insuranceIncluded = watch("insuranceIncluded");

  return (
    <div className={styles.container}>
      <Typography level="body-xs">
        {`${t("interestRate")} `}
        <strong>5.0%, </strong>
        {`${t("RPSNfrom")} `}
        <strong>7.11%, </strong>
        {`${t("insurance")} `}
        <strong>{`${insuranceIncluded ? 50 : 0} ${t("currency")}${t(
          "monthly"
        )}, `}</strong>
        {`${t("onlineProcessingFee")} `}
        <strong>{`0 ${t("currency")}, `}</strong>
        {`${t("totalPayment")} `}
        {isSuccess && <strong>{`${totalPayment} ${t("currency")}`}</strong>}
        {isPending && <div className={styles.dummySpace} />}
      </Typography>
      <Typography level="body-xs">{t("declaimer")}</Typography>
    </div>
  );
}
