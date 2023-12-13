"use client";

import { useHook } from "@/hooks/useHook";
import { useTestStore } from "@/store/testStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const increment = useTestStore((state) => (state as { increment: () => void }).increment);
  const { increment } = useHook();
  const count = useTestStore((state) => (state as { count: number }).count);
  const router = useRouter();

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <main className="flex min-h-screen flex-col h-full bg-black text-white items-center justify-center">
      <p>hello: {count}</p>
      <button onClick={() => increment()}>add</button>
      <Link href={"/dashboard"}>dashboard(link)</Link>
      <button onClick={() => router.push("/dashboard")}>dashboard(router)</button>
    </main>
  );
}
