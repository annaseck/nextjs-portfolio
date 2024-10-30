/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.leptidigital.fr',              
            },
          ],
        
      }
};

export default nextConfig;
