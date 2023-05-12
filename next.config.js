/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        swcPlugins: [
            ["next-superjson-plugin", {}]
        ]
    },
    images: {
        domains: [
          "avatars.githubusercontent.com",
          "lh3.googleusercontent.com",
          "lh3.googleusercontent.com",
          "res.cloudinary.com",
          "web.facebook.com"
        ]
      }
}

module.exports = nextConfig
