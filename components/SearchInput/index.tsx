import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchIcon.svg";

type Props = {
  primaryColor: string;
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ primaryColor, onSearch }: Props) => {
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
        borderColor: focused ? primaryColor : "#FFF",
      }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <SearchIcon color={primaryColor} />
      </div>
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
