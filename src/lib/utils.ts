import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {useEffect, useRef} from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref?.current?.contains(e.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [callback]);

  return ref;
};