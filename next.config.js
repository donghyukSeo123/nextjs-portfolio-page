/** @type {import('next').NextConfig} */
const nextConfig = {
   // 빌드 시 타입 오류 무시
   typescript: {
    ignoreBuildErrors: true, // ✔ 여기 맞음!
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
