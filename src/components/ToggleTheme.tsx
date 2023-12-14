"use client";

import { useTheme } from "next-themes";

export const ToggleTheme: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-4">
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("system")}>system</button>
    </div>
  );
};
