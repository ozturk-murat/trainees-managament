"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../contexts/authContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Kullanıcı adı ve şifreyi kullanarak giriş yapma işlemini gerçekleştir
    if (username === "admin@gmail.com" && password === "admin123") {
      authContext.login();
      router.push("/"); // Anasayfaya yönlendir
    } else {
      // Giriş başarısız
      alert("Username or password incorrect!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-44 bg-gradient-to-r from-yellow-500 to-amber-300">
      <div className="flex justify-center flex-col items-center lg:w-4/12 md:w-10/12 sm:w-11/12 h-3/4 bg-white rounded-xl shadow px-7 py-11">
        <div className="flex justify-center items-center w-full">
          <div className="w-1 h-8 bg-amber-300"></div>
          <div className="text-black text-4xl font-bold pl-2 whitespace-nowrap">
            MANAGE COURSES
          </div>
        </div>

        <div className="flex justify-center flex-col items-center w-full pt-11">
          <div className="text-black text-[22px] font-semibold uppercase pb-2">
            SIGN IN
          </div>
          <div className="text-neutral-500 text-[14px] font-normal">
            Enter your credentials to access your account
          </div>
        </div>

        <div className="w-full mt-14">
          <form
            onSubmit={handleLogin}
            className="flex justify-center items-center flex-col w-full"
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
              className=" bg-yellow-500 w-full text-white text-[14px] font-medium h-11 rounded"
              type="submit"
            >
              SIGN IN
            </button>
          </form>
          <div className="w-full flex justify-center mt-7">
            <span className="text-neutral-500 text-[14px] font-normal">
              Forgot your password?&nbsp;
            </span>
            <span className="text-yellow-500 text-[14px] font-normal underline">
              Reset Password
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
