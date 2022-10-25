import { useEffect } from "react";
import { useRouter } from "next/router";
import { ProfileForm } from "@/components/profile";
import { AuthGuard } from "@/gaurd";
import { getUserLocalstorage } from "@/utils";
import { PRIVATE_ROUTES } from "@/routes";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const user = getUserLocalstorage();

    if (!user) return;
    if (user.profile) router.push(`/${PRIVATE_ROUTES.HOME}`);
    return;
  }, [router]);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#101318]">
        {/* create new profile */}
        <ProfileForm />
      </div>
    </AuthGuard>
  );
};

export default Profile;
