"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Register = () => {
  const { SignUpWithUser, signInWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    SignUpWithUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Account Created 🎉",
          text: "Registration Successful",
          icon: "success",
        }).then(() => {
          router.push("/"); // ✅ redirect to home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error ❌",
          text: error.message,
          icon: "error",
        });
      });
  };

  // Google Login
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Google Login Success 🎉",
          text: "Welcome!",
          icon: "success",
        }).then(() => {
          router.push("/"); // ✅ redirect to home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed ❌",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Enter name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter password"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Register
          </button>
        </form>

        {/* Google Button */}
        <button
          onClick={handleGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg mt-4 hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl" />
          Sign In With Google
        </button>

        <p className="text-center mt-4 text-sm">
          Already have account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
