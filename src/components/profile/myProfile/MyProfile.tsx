import Image from "next/image";
import { Profile as ProfileInterface } from "@/interfaces";

interface Props {
  profile: ProfileInterface;
}

export const MyProfile = ({ profile }: Props) => {
  return (
    <div className="py-10 text-white w-10/12 mx-auto">
      <div className="self-start mb-10 text-center">
        <h1 className="text-white text-4xl">My Profile</h1>
      </div>
      <div className="flex justify-between items-center">
        <Image
          src={profile.file!}
          alt="image"
          width={350}
          height={300}
          className=""
        />
        <div className="mr-52 w-4/12">
          <h3 className="text-lg mb-5">
            <span className="capitalize">username: </span>
            {profile.username}
          </h3>
          <span className="capitalize text-lg">description: </span>
          <p className="text-lg">{profile.description}</p>
          <div className="mt-10">
            <h3 className="text-lg">
              Fullname:
              <span> {profile.user?.fullname}</span>
            </h3>
            <h3 className="text-lg">
              Email:
              <span> {profile.user?.email}</span>
            </h3>
          </div>
          <div className="mt-16">
            <button className="bg-teal-700 p-2 rounded-md hover:bg-teal-500 duration-300">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
