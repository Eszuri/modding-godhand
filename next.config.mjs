/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000/api",
        CLOUDINARY_CLOUD_NAME: "dwi9ltvmr",
        CLOUDINARY_API_KEY: "283847293582868",
        CLOUDINARY_API_SECRET: "WYbj5tpHfXoeMunTKYVhZteLxAM"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/*/**',
            },
        ],
    },
};

export default nextConfig;
