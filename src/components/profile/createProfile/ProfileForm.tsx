import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux";
import { createProfileThunk } from "@/redux/thunks";
import { getUserLocalstorage } from "@/utils";
import { CreateProfile } from "@/interfaces";

import styles from "./profileForm.module.css";

interface FormProfile {
  username: string;
  description?: string;
  file: string;
  userId: number;
}

export const ProfileForm = () => {
  const [file, setFile] = useState<any>();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProfile>();

  const handleFile = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files?.length !== 0) {
      setFile(URL.createObjectURL(evt.target.files![0]) as any);
    }
  };

  const submit = (data: FormProfile) => {
    const user = getUserLocalstorage();
    const userId = user.id;

    dispatch(
      createProfileThunk({
        ...data,
        user: userId,
        file: data.file[0],
      } as CreateProfile)
    );
  };

  return (
    <div className="border-2 border-transparent">
      <h1 className="text-2xl text-center m-5 text-white">
        Create your profile
      </h1>
      <div className={`${styles.containerFormImg} p-5`}>
        <form
          className="order-2 border-2 flex flex-col gap-5 p-5"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex gap-2 items-center justify-between flex-wrap">
            <label htmlFor="" className="capitalize text-lg text-white">
              username:
            </label>
            <input
              type="text"
              className={`${styles.input} w-[85%] bg-transparent`}
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-white bg-red-700 px-[3px]">
                username is required
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 justify-between">
            <label htmlFor="" className="text-white text-lg capitalize">
              description:
            </label>
            <textarea
              className={`${styles.textarea} w-[85%] bg-transparent text-white`}
              {...register("description")}
            />
          </div>
          <div>
            <label htmlFor="">photo:</label>
            <input
              type="file"
              {...register("file", { required: true })}
              onChange={handleFile}
            />
            {errors.file && (
              <span className="text-white bg-red-700 px-[3px]">
                photo is required
              </span>
            )}
          </div>
          <button className="bg-teal-700 text-white p-2">Create</button>
        </form>
        <div className="p-5 flex justify-center">
          {file ? (
            <Image
              src={file}
              width={400}
              height={250}
              className="order-1"
              alt="image-profile"
            />
          ) : (
            <h2 className="text-white text-2xl text-center">
              Image not selected
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
