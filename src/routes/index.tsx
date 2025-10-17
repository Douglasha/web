import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading.tsx";

import { useAuth } from "../hooks/useAuth.tsx";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { ManagerRoutes } from "./ManagerRoutes.tsx";
import { EmployeeRoutes } from "./EmployeeRoutes.tsx";

const isLoading = false; // TODO: replace with actual loading state

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  const context = useAuth();
  console.log(context);

  function Route() {
    switch (session.user.role) {
      case "manager":
        return <ManagerRoutes />;
      case "employee":
        return <EmployeeRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
