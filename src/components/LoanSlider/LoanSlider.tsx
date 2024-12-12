import { Typography, Slider } from "@mui/joy";
import styles from "./loanSlider.module.css";
import { Controller, useFormContext } from "react-hook-form";

interface LoanSliderProps {
  name: string;
  min: number;
  max: number;
  title: string;
  unit: string;
}

export default function LoanSlider({
  name,
  min,
  max,
  title,
  unit,
}: LoanSliderProps) {
  const { setValue, control, watch } = useFormContext();
  const value = watch(name);
  return (
    <div className={styles.container}>
      <Typography level="h4">{title}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            value={value}
            onChange={(_, v) => setValue(name, v)}
            min={min}
            max={max}
          />
        )}
      />
      <div className={styles.numberRange}>
        <Typography level="body-sm">{`${min} ${unit}`}</Typography>
        <Typography level="body-sm">{`${max} ${unit}`}</Typography>
      </div>
    </div>
  );
}
