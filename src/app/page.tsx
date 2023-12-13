"use client";

import { useTestStore } from "@/store/testStore";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const increment = useTestStore((state) => (state as { increment: () => void }).increment);
  const count = useTestStore((state) => (state as { count: number }).count);

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <main className="flex min-h-screen flex-col h-full bg-black text-white items-center justify-center">
      <p>hello: {count}</p>
      <button onClick={() => increment()}>add</button>
      <Link href={"/dashboard"}>dashboard</Link>
    </main>
  );
}
