import * as React from "react";

function InputField({ label, type, className }) {
  return (
    <>
      <label
        htmlFor={`${label.toLowerCase()}Input`}
        className="text-base capitalize text-yellow-950 max-md:max-w-full"
      >
        {label}
      </label>
      <input
        type={type}
        id={`${label.toLowerCase()}Input`}
        className={`shrink-0 mt-3.5 border border-black border-solid h-[45px] max-md:max-w-full ${className}`}
      />
    </>
  );
}

function Checkbox({ label }) {
  return (
    <div className="flex gap-2.5 self-start mt-8 text-xl font-medium text-stone-500">
      <input
        type="checkbox"
        id={`${label.toLowerCase()}Checkbox`}
        className="shrink-0 border border-solid border-yellow-950 h-[17px] w-[17px]"
      />
      <label htmlFor={`${label.toLowerCase()}Checkbox`} className="flex-auto">
        {label}
      </label>
    </div>
  );
}

const  SignUp = ()=> {
  return (
    <div className="flex flex-col justify-center bg-white">
      <section className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-36 mb-6 max-w-full w-[800px] max-md:mt-10">
          <h1 className="self-center text-5xl font-bold text-center capitalize leading-[55.2px] text-yellow-950 max-md:max-w-full max-md:text-4xl">
            Create New Account
          </h1>
          <form className="flex flex-col px-12 py-14 mt-11 bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <InputField label="Full Name" type="text" />
            <InputField label="Email" type="email" />
            <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col flex-1 grow shrink-0 text-base capitalize whitespace-nowrap basis-0 text-yellow-950 w-fit">
                <InputField label="Phone" type="tel" />
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                <label
                  htmlFor="passwordInput"
                  className="text-base capitalize text-yellow-950"
                >
                  Password
                </label>
                <div className="flex flex-col justify-center items-end px-16 py-3.5 mt-3.5 border border-black border-solid max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d088d1e08f90bf955b513dfe32655217db6b64f8a332f30da67c8dc8d077a9?apiKey=61fdf683f141495eb249129d739ec110&"
                    alt=""
                    className="w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
            <Checkbox label="Save this information for next time" />
            <button
              type="submit"
              className="justify-center self-center px-9 py-4 mt-14 text-base font-bold text-center text-white capitalize bg-yellow-950 max-md:px-5 max-md:mt-10"
            >
              Sign Up
            </button>
            <p className="self-center mt-2.5 text-xl font-medium text-center text-stone-500">
              Already have an account?{" "}
              <a href="#" className="underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;