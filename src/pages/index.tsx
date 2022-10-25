import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getToken } from "@/utils";
import { PRIVATE_ROUTES } from "@/routes";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) router.push(`/${PRIVATE_ROUTES.HOME}`);
  });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
