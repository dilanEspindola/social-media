import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { Login } from "@/interfaces";
import { useAuth } from "@/hooks";

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const router = useRouter();
  const { login } = useAuth();

  const submit = (loginData: Login) => {
    console.log(loginData);
    login(loginData).then((data) => {
      data.auth && router.push(`/${PRIVATE_ROUTES.PROFILE}`);
    });
  };

  return (
    <div
      className="w-full flex items-center justify-center h-screen
      bg-gradient-to-b from-[#170233] to-[#250470] lg:flex-row lg:gap-32 xs:flex-col xs:gap-10"
    >
      <div className="p-2 lg:w-3/12">
        <h1 className="text-white text-4xl text-center mb-5">Welcome back</h1>
        <p className="text-slate-300 text-lg text-center">
          You can share your favorite topics with people around the world
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="border-2 flex flex-col bg-white p-10 rounded-3xl lg:w-1/3 md: 3/3"
      >
        <div className="mb-5">
          <h3 className="font-bold text-3xl mb-1 text-slate-700">Login</h3>
          <p className="text-slate-700">
            Do not have an account?
            <Link href={`${PUBLIC_ROUTES.REGISTER}`}>
              <a className="text-purple-600 capitalize hover:text-purple-800">
                {" "}
                sign up
              </a>
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="">
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-slate-200 border-none outline-none p-3 rounded-lg
              focus:outline-purple-600 focus:bg-purple-50 focus:outline-1 duration-200"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>
          <div className="mb-10 h-50">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-200 border-none outline-none p-3 rounded-lg
              focus:outline-purple-600 focus:bg-purple-50 focus:outline-1 duration-200"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600">password is required</span>
            )}
          </div>
          <button
            className="bg-purple-800 text-white p-3 text-lg font-bold rounded-lg duration-200 transition-all
           ease-in-out hover:bg-purple-700"
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
