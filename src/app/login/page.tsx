"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../contexts/authContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Temporary login action
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin@gmail.com" && password === "admin123") {
      authContext.login();
      router.push("/");
    } else {
      alert("Username or password incorrect!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-yellow-500 to-amber-300 p-44">
      <div className="flex h-3/4 flex-col items-center justify-center rounded-xl bg-white px-7 py-11 shadow sm:w-11/12 md:w-10/12 lg:w-4/12">
        <div className="flex w-full items-center justify-center">
          <div className="h-8 w-1 bg-amber-300"></div>
          <div className="whitespace-nowrap pl-2 text-4xl font-bold text-black">
            MANAGE COURSES
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center pt-11">
          <div className="pb-2 text-[22px] font-semibold uppercase text-black">
            SIGN IN
          </div>
          <div className="text-[14px] font-normal text-neutral-500">
            Enter your credentials to access your account
          </div>
        </div>

        <div className="mt-14 w-full">
          <form
            onSubmit={handleLogin}
            className="flex w-full flex-col items-center justify-center"
          >
            <div className="mb-7 w-full">
              <label className="inputLabel" htmlFor="email">
                Username
              </label>
              <input
                className="formInput"
                id="username"
                type="email"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-7 w-full">
              <label className="inputLabel" htmlFor="password">
                Password
              </label>
              <input
                className="formInput"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className=" h-11 w-full rounded bg-yellow-500 text-[14px] font-medium text-white"
              type="submit"
            >
              SIGN IN
            </button>
          </form>
          <div className="mt-7 flex w-full justify-center">
            <span className="text-[14px] font-normal text-neutral-500">
              Forgot your password?&nbsp;
            </span>
            <span className="text-[14px] font-normal text-yellow-500 underline">
              Reset Password
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
