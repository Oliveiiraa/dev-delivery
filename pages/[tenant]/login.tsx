import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tenant } from "../../@types/Tenent";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useApi";
import styles from "../../styles/Login.module.css";

const Login = (data: Props) => {
  const router = useRouter();
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const handleSignUp = () => {
    router.push(`/${tenant?.slug}/signup`);
  };

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

      <div className={styles.header}>{data.tenant.name}</div>

      <div
        className={styles.subtitle}
        style={{ borderColor: data.tenant.primaryColor }}
      >
        Use suas credenciais para realizar o login.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.primaryColor}
            placeholder={"Digite seu e-mail"}
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.primaryColor}
            placeholder={"Digite sua senha"}
            value={password}
            onChange={setPassword}
            isPassword
          />
        </div>
        <div className={styles.inputArea}>
          <Button
            color={data.tenant.primaryColor}
            label="Entrar"
            onClick={handleSubmit}
            fill
          />
        </div>

        <div
          className={styles.forgetArea}
          style={{ borderColor: data.tenant.primaryColor }}
        >
          Esqueceu sua senha?{" "}
          <Link href={`${data.tenant.slug}/forget`}>
            <a style={{ color: data.tenant.primaryColor }}>Clique aqui</a>
          </Link>
        </div>

        <div className={styles.line}></div>

        <div className={styles.signupArea}>
          <Button
            color={data.tenant.primaryColor}
            label="Quero me cadastrar"
            onClick={handleSignUp}
          />
        </div>
      </div>
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
