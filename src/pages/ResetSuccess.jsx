import * as React from "react";

function PasswordChangedImage() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f560cbfe3b0d499cea266e7dff0bbd0f13f4aca3bda9da74c933391ca8492664?apiKey=61fdf683f141495eb249129d739ec110&"
      alt="Password changed successfully"
      className="max-w-full aspect-square w-[150px]"
    />
  );
}

function PasswordChangedMessage() {
  return (
    <p className="self-stretch mt-2 text-xl font-medium text-stone-500">
      Password changed successfully
    </p>
  );
}

function SignInButton() {
  return (
    <button className="justify-center px-10 py-4 mt-10 text-base font-bold text-white capitalize bg-yellow-950 max-md:px-5 max-md:mt-10">
      Sign In
    </button>
  );
}

function PasswordChangedContent() {
  return (
    <div className="flex justify-center items-center px-16 py-11 mt-9 bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[257px]">
        <PasswordChangedImage />
        <PasswordChangedMessage />
        <SignInButton />
      </div>
    </div>
  );
}

function PasswordChangedTitle() {
  return (
    <h1 className="self-center text-5xl font-bold capitalize leading-[55.2px] text-yellow-950 max-md:text-4xl">
      Resetting Password
    </h1>
  );
}

function PasswordChangedSection() {
  return (
    <section className="flex flex-col mt-60 mb-36 max-w-full w-[800px] max-md:my-10">
      <PasswordChangedTitle />
      <PasswordChangedContent />
    </section>
  );
}

function PasswordChangedPage() {
  return (
    <main className="flex justify-center items-center px-16 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <PasswordChangedSection />
    </main>
  );
}

 const ResetSuccess=()=> {
  return (
    <div className="flex flex-col justify-center text-center bg-white">
      <PasswordChangedPage />
    </div>
  );
}
export default ResetSuccess;
