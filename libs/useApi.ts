import { Tenant } from "../@types/Tenent";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "devburger":
        return {
          slug: "devburger",
          name: "DevBurger",
          primaryColor: "#FFC700",
          secondaryColor: "#fff9f2",
        };
      case "devpizza":
        return {
          slug: "devpizza",
          name: "DevPizza",
          primaryColor: "#0002a1",
          secondaryColor: "#fff9f2",
        };
      default:
        return false;
    }
  },
});
