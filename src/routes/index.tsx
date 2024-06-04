import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from "./auth.routes";
import { AppRouter } from "./app.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { authUserID } = useAuth();
  const isAuth = !!authUserID; // type conversion
  const routes = isAuth ? <AppRouter /> : <AuthRouter />; //type cohesion
  return <BrowserRouter>{routes}</BrowserRouter>;
}
