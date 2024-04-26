import * as React from "react";
function ForgotPassword() {
  return (
    <main className="flex flex-col justify-center capitalize bg-white text-yellow-950">
      {" "}
      <section className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        {" "}
        <div className="flex flex-col mt-60 mb-36 max-w-full w-[800px] max-md:my-10">
          {" "}
          <h1 className="self-center text-5xl font-bold text-center leading-[55.2px] max-md:text-4xl">
            {" "}
            Forgot Password{" "}
          </h1>{" "}
          <div className="flex justify-center items-center px-16 py-16 mt-9 text-base bg-white max-md:px-5 max-md:max-w-full">
            {" "}
            <form className="flex flex-col max-w-full w-[466px]">
              {" "}
              <p className="self-center font-semibold text-center">
                {" "}
                Please enter your email{" "}
              </p>{" "}
              <label
                htmlFor="email"
                className="mt-14 max-md:mt-10 max-md:max-w-full"
              >
                Email
              </label>{" "}
              <input
                type="email"
                id="email"
                className="shrink-0 mt-3.5 border border-black border-solid h-[45px] max-md:max-w-full"
              />{" "}
              <button
                type="submit"
                className="justify-center self-center px-9 py-4 mt-12 font-bold text-center text-white whitespace-nowrap bg-yellow-950 max-md:px-5 max-md:mt-10"
              >
                {" "}
                Submit{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
export default ForgotPassword;
