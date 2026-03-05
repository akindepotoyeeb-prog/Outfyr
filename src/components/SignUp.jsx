import React from "react";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="h-screen py-10 px-5">
      <div className="mb-6 text-center">
        <h1 className="text-3xl mb-2.5">Create Account</h1>
        <p className="">Join OUTFYT and start shopping smarter today.</p>
      </div>
      <form action="" className="mt-6 block ">
        <label htmlFor="" className="">
          Name
        </label>
        <input
          type="text"
          name=""
          id=""
          className="bg-[#9e9d9d] p-2 mb-3 rounded w-full outline-none mt-1"
        />
        <label htmlFor="" className="">
          Email
        </label>
        <input
          type="email"
          name=""
          id=""
          className="bg-[#9e9d9d] p-2 mb-2 rounded w-full outline-none mt-1"
        />
        <label htmlFor="" className="">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name=""
            id=""
            className="bg-[#9e9d9d] p-2 mb-2 rounded w-full outline-none mt-1"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10 text-[#000000]"><FaEyeSlash /></div>
        </div>
        <div className="flex h-5 items-center justify-start mt-4 ">
          <input
            type="checkbox"
            name=""
            id=""
            className="bg-[#9e9d9d] rounded"
          />
          <label htmlFor="" className="ml-2 ">
            Agree with <a href="#">Terms and Conditions</a>
          </label>
        </div>

        <button type="submit" className="bg-[#e48045] w-full p-2 rounded mt-10">
          Sign Up
        </button>
      </form>
      <div className="mt-10 relative">
        <span className="w-full h-px bg-[#626262] block "> </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#212121] px-3 text-[#626262] block ">
          or with
        </span>
      </div>
      <div className="mt-10 text-center flex justify-center gap-10">
        <div className="w-10 h-10 rounded-full border border-[#626262] p-1 flex justify-center items-center ">
          <a href="#" className="block">
            <FaApple />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full border border-[#626262] p-1 flex justify-center items-center ">
          <a href="#" className="block">
            <FaFacebook />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full border border-[#626262] p-1 flex justify-center items-center ">
          <a href="#" className="block">
            <FcGoogle />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 font-medium"><p>Already have an account? <a href="./SignIn.jsx" className="text-[#e48045] ">Sign in</a></p></div>
    </div>
  );
}
