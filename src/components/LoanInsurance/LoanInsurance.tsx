import { Checkbox } from "@mui/joy";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./loanInsurance.module.css";

interface DualCheckboxProps {
  name: string;
  firstLabel: string;
  secondLabel: string;
}

export default function DualCheckbox({
  name,
  firstLabel,
  secondLabel,
}: DualCheckboxProps) {
  const { setValue, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <div className={styles.inputContainer}>
          <Checkbox
            checked={value}
            label={firstLabel}
            onChange={() => setValue(name, true)}
          />
          <Checkbox
            checked={!value}
            label={secondLabel}
            onChange={() => setValue(name, false)}
          />
        </div>
      )}
    />
  );
}
