"use client";

import { useTestStore } from "@/store/testStore";

export default function DashboardPage() {
  const count = useTestStore((state) => (state as { count: number }).count);

  return (
    <div className="flex min-h-screen h-full bg-black text-white items-center justify-center">
      Dashboard Page: {count}
    </div>
  );
}
