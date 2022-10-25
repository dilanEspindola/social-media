import { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { Profile, MyProfile } from "@/components/profile";
import { AuthGuard } from "@/gaurd";
import { Profile as ProfileInterface } from "@/interfaces";
import { URL, getUserLocalstorage } from "@/utils";

const UserProfile: NextPage<{ profile: ProfileInterface }> = ({ profile }) => {
  const [validateUsername, setValidateUsername] = useState<boolean>(false);

  useEffect(() => {
    const user = getUserLocalstorage();
    if (user.profile?.username === profile.username)
      setValidateUsername(() => true);
  }, [profile.username]);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#101318] px-5">
        {validateUsername ? (
          <MyProfile profile={profile} />
        ) : (
          <Profile profile={profile} />
        )}
      </div>
    </AuthGuard>
  );
};

export default UserProfile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;

  const res = await fetch(
    `${URL}/profile/username?username=${params?.username}`
  );
  const profile: ProfileInterface = await res.json();

  if (profile.message) return { notFound: true };

  return {
    props: { profile },
  };
};
