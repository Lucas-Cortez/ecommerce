"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { useMount } from "@/hooks/useMount";

import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";

export const ToggleThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useMount();

  const isDark = theme === "dark";

  if (!isMounted) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => {
              setTheme(isDark ? "light" : "dark");
            }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isDark ? <p>Tema claro</p> : <p>Tema escuro</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
