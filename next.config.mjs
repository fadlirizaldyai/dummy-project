import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline",
  },
  reloadOnOnline: true,
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dummy-project-beryl.vercel.app/:path*',
      },
    ]
  },
};
// async headers() {
//   return [
//     {
//       // matching all API routes
//       source: "/api/:path*",
//       headers: [
//         { key: "Access-Control-Allow-Credentials", value: "true" },
//         {
//           key: "Access-Control-Allow-Origin",
//           value: "http://localhost:5173",
//         }, // replace this your actual origin
//         {
//           key: "Access-Control-Allow-Methods",
//           value: "GET,DELETE,PATCH,POST,PUT",
//         },
//         {
//           key: "Access-Control-Allow-Headers",
//           value:
//             "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//         },
//       ],
//     },
//   ];
// },

export default withPWA(nextConfig);
