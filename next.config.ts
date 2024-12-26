import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  // ppr is only available on nextjs canary ,
  // to use it, write export const experimental_ppr = true; in the page 
  // where u want to use it and uncomment the lines below
  
  // experimental: {
  //   ppr: 'incremental'
  // },
  // devIndicators: {
  //   appIsrStatus: true,
  //   buildActivity: true,
  //   buildActivityPosition: 'bottom-right',
  // }
};

export default nextConfig;
