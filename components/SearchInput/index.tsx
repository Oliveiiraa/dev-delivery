import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ mainColor, onSearch }: Props) => {
  const [focused, sedFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? mainColor : "#FFF",
      }}
    >
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      ></div>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite o nome do produto"
        onFocus={() => sedFocused(true)}
        onBlur={() => sedFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
