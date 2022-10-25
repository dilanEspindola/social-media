import Image from "next/image";
import { Profile as ProfileInterface } from "@/interfaces";

interface Props {
  profile: ProfileInterface;
}

export const Profile = ({ profile }: Props) => {
  return (
    <div className="py-10 text-white w-10/12 mx-auto flex justify-between items-center">
      <Image
        src={profile.file!}
        alt="image"
        width={350}
        height={300}
        className=""
      />
      <div className="mr-52 w-4/12">
        <h1 className="text-2xl mb-5">
          <span className="capitalize">username: </span>
          {profile.username}
        </h1>
        <span className="capitalize">description: </span>
        <p className="">{profile.description}</p>
      </div>
    </div>
  );
};
