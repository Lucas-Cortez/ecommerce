import { useTestStore } from "@/store/testStore";
import { useCallback } from "react";

export const useHook = () => {
  const increment = useCallback(() => {
    (useTestStore.getState() as { increment: () => void }).increment();
  }, []);

  return { increment };
};
