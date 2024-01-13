/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['kwemvbclnytynapuyiqt.supabase.co'],
    },
}

module.exports = nextConfig
