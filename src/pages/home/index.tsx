import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { AuthGuard } from "@/gaurd";
import { getUserLocalstorage } from "@/utils";
import { PRIVATE_ROUTES } from "@/routes";
import { Header } from "@/components/home/header";

const UserHome: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = getUserLocalstorage();
    if (!user) return;
    if (!user.profile) router.push(`${PRIVATE_ROUTES.PROFILE}`);
  }, []);

  return (
    <AuthGuard>
      <div className="border-2 bg-slate-200 h-screen">
        <Header />
      </div>
    </AuthGuard>
  );
};

export default UserHome;
