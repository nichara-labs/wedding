import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFastapiErrorMessage = (error: unknown) => {
  if (typeof error === "object" && error !== null && "detail" in error) {
    if (Array.isArray(error.detail)) return error.detail?.[0]?.msg as string;
    return error.detail as string;
  }
  return null;
};
