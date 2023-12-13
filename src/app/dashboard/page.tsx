"use client";

import { useHook } from "@/hooks/useHook";
import { useTestStore } from "@/store/testStore";

export default function DashboardPage() {
  const { increment } = useHook();
  const count = useTestStore((state) => (state as { count: number }).count);

  return (
    <div className="flex flex-col min-h-screen h-full bg-black text-white items-center justify-center">
      Dashboard Page: {count}
      <button onClick={() => increment()}>add</button>
    </div>
  );
}
