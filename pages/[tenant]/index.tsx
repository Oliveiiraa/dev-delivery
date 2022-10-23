import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput primaryColor="#FFC700" onSearch={handleSearch} />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
          primaryColor="#FFC700"
          secondaryColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
          primaryColor="#FFC700"
          secondaryColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
          primaryColor="#FFC700"
          secondaryColor="#fff9f2"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
          primaryColor="#FFC700"
          secondaryColor="#fff9f2"
        />
      </div>
    </div>
  );
};

export default Home;
