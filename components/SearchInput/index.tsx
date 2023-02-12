import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchIcon.svg";
import { useAppContext } from "../../contexts/AppContext";

type Props = {
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
  const { tenant } = useAppContext();
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
        borderColor: focused ? tenant?.primaryColor : "#FFF",
      }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <SearchIcon color={tenant?.primaryColor} />
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
