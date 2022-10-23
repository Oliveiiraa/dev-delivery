import Link from "next/link";
import { Product } from "../../@types/Product";
import styles from "./styles.module.css";

type Props = {
  data: Product;
  primaryColor: string;
  secondaryColor: string;
};

export const ProductItem = ({ data, primaryColor, secondaryColor }: Props) => {
  return (
    <Link href={`/devbuger/product/${data.id}`}>
      <a className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: secondaryColor }}
        />
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} alt={data.name} />
          </div>
          <div className={styles.catName}>{data.category}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: primaryColor }}>
            {data.price}
          </div>
        </div>
      </a>
    </Link>
  );
};
