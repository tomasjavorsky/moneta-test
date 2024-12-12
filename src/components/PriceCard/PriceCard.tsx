import { Button, CircularProgress, Typography } from "@mui/joy";
import PhoneIcon from "../Icons/Phone";
import styles from "./priceCard.module.css";
import { useTranslation } from "react-i18next";
import { numberWithThousands } from "../../utils/thousandSeparator";

interface PriceCardProps {
  isSuccess: boolean;
  isPending: boolean;
  monthlyPayment: number;
}

export default function PriceCard({
  isPending,
  isSuccess,
  monthlyPayment,
}: PriceCardProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.priceContainer}>
      <div className={styles.innerPriceContainer}>
        <Typography sx={{ color: "white", fontWeight: "bold" }} level="body-md">
          {t("monthlyPayments")}
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "bold" }} level="h1">
          {isSuccess &&
            `${numberWithThousands(monthlyPayment)} ${t("currency")}`}
          {isPending && <CircularProgress variant="plain" />}
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
  );
}
