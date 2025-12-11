/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dual-platform support for Replit and Vercel
  output: process.env.REPLIT ? 'standalone' : undefined,
  images: {
    unoptimized: !!process.env.REPLIT,
  },
}

module.exports = nextConfig
