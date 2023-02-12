import styles from "./styles.module.css";
import EyeOn from "./EyeOn.svg";
import EyeOff from "./EyeOff.svg";
import { useState } from "react";

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  isPassword?: boolean;
};

export const InputField = ({
  color,
  placeholder,
  value,
  onChange,
  isPassword,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? color : "#f9f9fb",
        backgroundColor: focused ? "#FFF" : "#f9f9fb",
      }}
    >
      <input
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {isPassword && (
        <div
          className={styles.showPassword}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOn color="#BBB" /> : <EyeOff color="#BBB" />}
        </div>
      )}
    </div>
  );
};
