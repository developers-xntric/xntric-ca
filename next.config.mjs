/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/services/Production",
        destination: "/services/video-production",
        permanent: true, // set true for 301 redirect
      },
      // Add other redirects here if needed
    ];
  },
};

export default nextConfig;
