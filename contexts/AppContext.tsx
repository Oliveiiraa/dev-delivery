import { createContext, ReactNode, useContext, useState } from "react";
import { Tenant } from "../@types/Tenent";

type AppContextType = {
  tenant: Tenant | null;
  setTenant: (newTenant: Tenant) => void;
};

const defaultTenant: AppContextType = {
  tenant: null,
  setTenant: () => null,
};

const appContext = createContext<AppContextType>(defaultTenant);

export const useAppContext = () => useContext(appContext);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  return (
    <appContext.Provider value={{ tenant, setTenant }}>
      {children}
    </appContext.Provider>
  );
};
