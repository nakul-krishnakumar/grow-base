import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatView(views: number) {
  if (views <= 1) {
    return "View"
  } else return "Views";
} 

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}