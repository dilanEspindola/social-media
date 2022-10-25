import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { getToken } from "@/utils";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthGuard: FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) router.push("/login");
  }, [router]);

  return <div>{children}</div>;
};
