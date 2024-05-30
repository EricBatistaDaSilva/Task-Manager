import { PropsWithChildren, createContext } from "react";
import { API } from "../configs/api";

export type SignInTypes = {
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    return API.post("/login", { email, password })
      .then((response) => {
        console.log(response);
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.message);
        } else {
          alert("Erro inesperado no login");
        }
        console.error(error);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
