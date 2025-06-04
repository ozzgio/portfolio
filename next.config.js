/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            new URL('https://cdn.simpleicons.org/**'),
            new URL('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/**')
        ],
        dangerouslyAllowSVG: true,
    }
};

module.exports = nextConfig;