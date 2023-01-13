"use client";
import Image from "next/image";
import React from "react";
import LoginLogo from "../../assets/LoginLogo.png";
import LoginRectangle from "../../assets/LoginRectangle.png";
import GoogleButton from "../../assets/GoogleButton.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import MainButton from "../../components/MainButton";

type InputType = {
  emailPhone: string;
  password: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>();
  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

  console.log(watch("emailPhone")); // watch input value by passing the name of it

  return (
    <div className="relative bg-gradient-to-br from-gradientFrom via-gradientVia to-gradientTo min-h-screen overflow-hidden flex items-center justify-center py-10 px-4 md:px-8 lg:px-14">
      <Image
        className="w-full absolute top-20 -left-40 md:max-w-xl lg:max-w-xl"
        src={LoginLogo}
        alt="logo"
      />
      <Image
        className="w-full absolute -bottom-40 -right-40 md:max-w-xl lg:max-w-5xl lg:-right-80 lg:-bottom-80"
        src={LoginRectangle}
        alt="rectangle"
      />
      <div className="relative z-10 w-full max-w-screen-md p-10 bg-white rounded-md shadow-primary">
        <h4 className="text-2xl font-bold text-gray-700 mb-3">
          Connectez-vous a votre compte
        </h4>
        <p className="text-sm text-black opacity-50">
          Enter the required informations to login
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 flex flex-col">
            <label
              className="text-sm text-gray-500 font-medium cursor-pointer mb-2"
              htmlFor="emailPhone"
            >
              Email/Phone
            </label>
            <input
              placeholder="youraddres@email.com"
              {...(register("emailPhone"), { required: true })}
              id="emailPhone"
              className="text-gray-500 py-2 focus:outline-none border-b-2 border-gray-200"
            />
            {errors.emailPhone && (
              <div className="text-orange font-bold text-sm">
                This field is required!
              </div>
            )}
          </div>
          <div className="my-5 flex flex-col">
            <label
              className="text-sm text-gray-500 font-medium cursor-pointer mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="Enter your password"
              {...register("password", { required: true })}
              id="password"
              className="text-gray-500 py-2 focus:outline-none border-b-2 border-gray-200"
            />
            {errors.password && (
              <div className="text-orange font-bold text-sm">
                This field is required!
              </div>
            )}
          </div>

          <div className="flex justify-end my-5">
            <Link href="/login" className="font-medium text-gray-700 text-base">
              Forgot password?
            </Link>
          </div>

          <MainButton
            uiType="primary"
            text="Login to Continue"
            className="w-full"
            submit
          />
        </form>
        <div className="my-5 flex items-center">
          <div className="h-[1px] opacity-30 w-full bg-gray-500" />
          <p className="text-sm text-black opacity-80 px-7">or</p>
          <div className="h-[1px] opacity-30 w-full bg-gray-500" />
        </div>

        <button className="bg-white my-5 block mx-auto w-full max-w-xs shadow-primary py-3 rounded-full transition hover:opacity-80">
          <Image
            src={GoogleButton}
            alt="login with google"
            className="mx-auto"
          />
        </button>

        <div className="flex items-center justify-center mt-10">
          <span className="text-black opacity-50 text-base">
            Don’t have an account ?
          </span>
          <Link
            className="text-gray-700 text-base underline underline-offset-4 ml-1"
            href="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
