"use-client";
import Image from "next/image";
import Link from "next/link";
import BgImage from "../../assets/signin.jpg";
import Logo from "../../assets/Frame 1261153122.png";

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      {/* Left Section - Image and Logo */}
      <div className="lg:w-1/2 relative flex flex-col justify-center items-center bg-gray-100">
        {/* Logo */}
        <div className="absolute top-4 left-4 z-10">
          <Image
            src={Logo} // Replace with your logo path
            alt="Vibe Logo"
            width={200}
            height={200}
          />
        </div>

        {/* Main Image */}
        <div className="absolute inset-0">
          <Image
            src={BgImage} // Replace with your image path
            alt="Sign In Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-1 text-sm text-gray-500">Please Sign-In Here</p>

          <form className="mt-6 space-y-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password">
                <a className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-[#B89C5D] rounded-md shadow hover:bg-[#8B7236] focus:outline-none focus:ring-2 focus:ring-[#8B7236] focus:ring-offset-2"
            >
              Sign In
            </button>

            {/* Not Registered Yet */}
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-700">
                Not Registered Yet?
              </span>
              <Link href="/signup">
                <a className="ml-1 text-blue-600 hover:underline">
                  Create an Account
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
