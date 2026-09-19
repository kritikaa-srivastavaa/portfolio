import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
