import React from "react";
function InputField({ label, className }) {
  return (
    <>
      {" "}
      <div className={`${className} max-md:max-w-full`}>{label}</div>{" "}
      <div className="shrink-0 mt-3.5 border border-black border-solid h-[45px] max-md:max-w-full" />{" "}
    </>
  );
}
function Button({ children }) {
  return (
    <div className="justify-center self-center px-9 py-4 mt-8 font-bold text-center text-white bg-yellow-950 max-md:px-5">
      {" "}
      {children}{" "}
    </div>
  );
}
const ResetPassword=()=>{
  return (
    <div className="flex flex-col justify-center capitalize bg-white text-yellow-950">
      {" "}
      <header className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        {" "}
        <div className="flex flex-col mt-60 mb-36 max-w-full w-[800px] max-md:my-10">
          {" "}
          <h1 className="self-center text-5xl font-bold text-center leading-[55.2px] max-md:text-4xl">
            {" "}
            Resetting Password{" "}
          </h1>{" "}
          <main className="flex justify-center items-center px-16 py-12 mt-9 text-base bg-white max-md:px-5 max-md:max-w-full">
            {" "}
            <form className="flex flex-col max-w-full w-[466px]">
              {" "}
              <InputField
                label="New Password"
                className="max-md:max-w-full"
              />{" "}
              <InputField
                label="Confirm Password"
                className="mt-9 max-md:max-w-full"
              />{" "}
              <Button>Reset Password</Button>{" "}
            </form>{" "}
          </main>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default ResetPassword;