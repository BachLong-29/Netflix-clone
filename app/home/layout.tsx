// import Navbar from "../component/Navbar";

import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Navbar = dynamic(() => import("../component/Navbar"), {
  ssr: false,
});

const HomeLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
