import React, { FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface SignupProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
}

export default function Signup({
  onSubmit,
  onChange,
  name,
  email,
  password,
  isLoading,
  error,
}: SignupProps) {
  return (
    <div className="h-full flex flex-col items-center w-[420px] px-[50px] py-0">
      <h1 className="text-[41px] mb-[20px]">Join X</h1>
      <form
        onSubmit={onSubmit}
        className="mt-[30px] mb-[20px] flex flex-col gap-5 w-full"
      >
        <input
          className="px-2.5 py-5 border-none rounded-[50px] w-full text-[16px]"
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />
        <input
          className="px-2.5 py-5 border-none rounded-[50px] w-full text-[16px]"
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <input
          className="px-2.5 py-5 border-none rounded-[50px] w-full text-[16px]"
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <input
          className="px-2.5 py-5 border-none rounded-[50px] w-full text-[16px] cursor-pointer bg-[#1d9bf0] color-white hover: opacity-80"
          type="submit"
          value={isLoading ? "Loading" : "Create Account"}
        />
      </form>
      {error !== "" ? (
        <span className="font-extrabold text-red-500">{error}</span>
      ) : null}
      <span className="mt-5">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#1d9bf0] underline-none hover: underline"
        >
          Log in &rarr;
        </Link>
      </span>
    </div>
  );
}
