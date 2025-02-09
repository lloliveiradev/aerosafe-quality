import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export", // Gera arquivos estáticos na pasta "out"
  distDir: "out",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
