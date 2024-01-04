"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const session = useSession();

  const handleLoginCredentials = async () => {
    setLoading(true);

    try {
      const response = await signIn("credentials", {
        email: "lucasc.sanches65@gmail.com",
        password: "123456",
        redirect: false,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <Button onClick={handleLogin} disabled={loading}>
          login google
        </Button>
        <Button onClick={() => signOut({})} disabled={loading}>
          logout
        </Button>
        <Button onClick={handleLoginCredentials}>login credentials</Button>
      </div>
      <code>{JSON.stringify(session, null, 2)}</code>
    </div>
  );
}
