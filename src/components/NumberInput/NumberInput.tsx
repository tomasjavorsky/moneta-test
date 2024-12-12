import { Input } from "@mui/joy";
import { Dispatch, SetStateAction } from "react";
import styles from "./numberInput.module.css";

interface NumberInputProps {
  value: number;
  setter: Dispatch<SetStateAction<number>>;
}

export default function NumberInput({ value, setter }: NumberInputProps) {
  return (
    <div className={styles.container}>
      <Input
        type="number"
        value={value}
        onChange={(e) => setter(parseInt(e.target.value))}
      />
    </div>
  );
}
