/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
      ignoreDuringBuilds:true
    },
    typescript:{
        ignoreBuildErrors:true
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mov|mp4|webm|ogg|avi|wmv|flv)$/,
        type: "asset/resource",
      });
  
      return config;
    },
};

export default nextConfig;
