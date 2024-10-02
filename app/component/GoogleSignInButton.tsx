"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";
import React from "react";

const GoogleSignInButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Image src={GoogleIcon} alt="google icon" className="h-6 w-6" />
    </Button>
  );
};

export default GoogleSignInButton;
