import React from "react";

function InputField({ label, type }) {
  return (
    <>
      <label className="mt-14 capitalize text-yellow-950 max-md:mt-10">
        {label}
      </label>
      <input
        type={type}
        className="shrink-0 mt-3 border border-black border-solid h-[45px] w-full"
      />
    </>
  );
}

const Login = ()=> {
  return (
    <main className="flex flex-col justify-center bg-white">
      <section className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-36 mb-28 max-w-full w-[400px] max-md:my-10">
          <h1 className="self-center text-5xl font-bold text-center capitalize leading-[55.2px] text-yellow-950 max-md:text-4xl">
            Log In
          </h1>
          <form className="flex flex-col px-6 py-14 mt-9 w-full text-base font-medium bg-white text-stone-500 max-md:px-5">
            <InputField label="Email/Phone" type="text" />
            <InputField label="Password" type="password" />
            <div className="flex gap-2.5 mt-7 text-xl">
              <input
                type="checkbox"
                className="shrink-0 self-start border border-solid border-yellow-950 h-[17px] w-[17px]"
              />
              <label className="flex-auto">Keep me logged in</label>
            </div>
            <button
              type="submit"
              className="justify-center self-center px-11 py-4 mt-12 font-bold text-center text-white capitalize bg-yellow-950 max-md:px-5 max-md:mt-10"
            >
              Log In
            </button>
            <p className="self-center mt-2.5 text-xl text-center">
              Don't have an account?{" "}
              <a href="#" className="underline">
                Sign Up
              </a>
            </p>
            <p className="self-center mt-3 text-xl text-center">
              <a href="#" className="underline">
                Forgot Password?
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
export default Login;
