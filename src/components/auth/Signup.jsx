import React from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function Signup() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const { mutate: createUser, isLoading: isCreatingUser } = useSignup();

  function onSubmit(data) {
    createUser(data);
    console.log(errors);
  }

  function onError(errors) {
    console.log("Form validation errors: ", errors);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-lightDark">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-dark">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-dark"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-lightDark px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-dark"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-lightDark px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-dark"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-lightDark px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minlength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold text-dark"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-md border border-lightDark px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Confirm your password"
              {...register("passwordConfirm", {
                required: "Password is required",
                validate: (value) => {
                  value !== getValues().password || "Passwords do not match";
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className="text-sm text-red-500">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full rounded-md bg-accent py-2 font-semibold text-white hover:bg-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              disabled={isCreatingUser}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
