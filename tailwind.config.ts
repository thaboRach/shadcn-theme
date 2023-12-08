import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./src/utils/shadcn-plug";
import { shadcnPreset } from "./src/utils/shadcn-preset";
const config = {
  presets: [shadcnPreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  plugins: [shadcnPlugin],
} satisfies Config;

export default config;
