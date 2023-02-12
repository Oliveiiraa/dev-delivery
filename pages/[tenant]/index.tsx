import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { Tenant } from "../../@types/Tenent";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useApi";
import styles from "../../styles/Home.module.css";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

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
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.primaryColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.primaryColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.primaryColor }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSearch} />
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
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
        />
        <ProductItem
          data={{
            id: 4,
            image: "/tmp/burger.png",
            category: "Tradicional",
            name: "Texas Burger",
            price: "R$ 19,90",
          }}
        />
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  if (!tenantSlug) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
