import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { useAppDispatch, useAppSelector } from "@/redux";
import { setUsername } from "@/redux/slices/profileSlice";
import { removeAll } from "@/utils";

export const NavBar = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((store) => store.profile);
  const router = useRouter();

  useEffect(() => {
    dispatch(setUsername());
    if (profile.username?.length === 0) {
      return;
    }
  });

  const searching = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) return setIsSearching(true);
    setIsSearching(false);
  };

  const logout = () => {
    removeAll();
    router.replace(`/${PUBLIC_ROUTES.LOGIN}`);
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="">
        <Image
          src="/assets/airbnb-logo.png"
          alt="logo"
          width={150}
          height={70}
          layout="fixed"
        />
      </div>
      <div className="mr-5 flex justify-center h-14 w-full">
        <div className="w-3/12 relative z-50">
          <input
            type="search"
            className="bg-slate-200 p-3 rounded-full placeholder:text-center placeholder:text-lg w-full
            outline-none px-4"
            placeholder="search something..."
            onChange={searching}
          />
          {!isSearching && (
            <BsSearch className="z-5 absolute top-[33%] right-[10%] text-slate-500" />
          )}
        </div>
      </div>
      <div className={`flex flex-col items-end justify-center relative`}>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div>
              <FaUserCircle
                className={`text-5xl text-slate-400 hover:text-slate-500 cursor-pointer`}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-800 rounded-box w-52"
          >
            <li>
              <Link
                href={`${PRIVATE_ROUTES.PROFILE}/${profile.username}`}
                className="justify-between"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link href="#">Settings</Link>
            </li>
            <li>
              <span onClick={logout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
