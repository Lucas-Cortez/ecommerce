"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    signIn("google");
  };

  return <Button onClick={handleLogin}>login google</Button>;
}
