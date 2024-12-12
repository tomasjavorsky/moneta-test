import { Typography, Slider } from "@mui/joy";
import styles from "./amountSlider.module.css";
import { Dispatch, SetStateAction } from "react";

interface AmountSliderProps {
  min: number;
  max: number;
  value: number;
  title: string;
  unit: string;
  setter: Dispatch<SetStateAction<number>>;
}

export default function AmountSlider({
  min,
  max,
  title,
  unit,
  value,
  setter,
}: AmountSliderProps) {
  //check due to slider component library value can be an array
  const handleChange = (v: number | number[]) => {
    if (typeof v !== "number") {
      console.error("You are unsing a range slider");
      return;
    }
    setter(v);
  };

  return (
    <div className={styles.container}>
      <Typography level="h4">{title}</Typography>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={(e, v) => handleChange(v)}
      />
      <div className={styles.numberRange}>
        <Typography level="body-sm">{`${min} ${unit}`}</Typography>
        <Typography level="body-sm">{`${max} ${unit}`}</Typography>
      </div>
    </div>
  );
}
