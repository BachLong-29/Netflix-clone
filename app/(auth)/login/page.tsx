import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { authOptions } from "@/app/utils/auth";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const GithubSignInButton = dynamic(
  () => import("@/app/component/GithubSignInButton"),
  {
    ssr: false,
  }
);

const GoogleSignInButton = dynamic(
  () => import("@/app/component/GoogleSignInButton"),
  {
    ssr: false,
  }
);

const Login = async () => {
  console.log("process.env.GITHUB_ID", process.env);
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }
  return (
    <span className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text=gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        New to Netflix?{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          Sign up now!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </span>
  );
};

export default Login;
