import { Input, Typography } from "@mui/joy";
import styles from "./numberInput.module.css";
import { useFormContext } from "react-hook-form";

interface NumberInputProps {
  name: string;
}

export default function NumberInput({ name }: NumberInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.fillSpace} />
      <Input
        {...register(name, { valueAsNumber: true })}
        error={!!errors[name]?.message}
        type="number"
      />
      <div className={styles.fillSpace}>
        <Typography color="danger" level="body-xs">
          {errors[name]?.message as string}
        </Typography>
      </div>
    </div>
  );
}
