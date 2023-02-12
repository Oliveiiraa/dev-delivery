import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Tenant } from "../../@types/Tenent";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useApi";
import styles from "../../styles/Login.module.css";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>

      <Header
        color={data.tenant.primaryColor}
        backHref={`/${data.tenant.slug}`}
      />

      <InputField
        color={data.tenant.primaryColor}
        placeholder={"Digite seu e-mail"}
        value={email}
        onChange={setEmail}
      />

      <InputField
        color={data.tenant.primaryColor}
        placeholder={"Digite sua senha"}
        value={password}
        onChange={setPassword}
        isPassword
      />

      <Button
        color={data.tenant.primaryColor}
        label="Entrar"
        onClick={handleSubmit}
        fill
      />
    </div>
  );
};

export default Login;

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
