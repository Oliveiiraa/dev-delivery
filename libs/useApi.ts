export type getTenantResponse = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
};

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "devburger":
        return {
          name: "DevBuger",
          primaryColor: "#FFC700",
          secondaryColor: "#fff9f2",
        };
      case "devpizza":
        return {
          name: "DevPizza",
          primaryColor: "#0002a1",
          secondaryColor: "#fff9f2",
        };
      default:
        return false;
    }
  },
});
