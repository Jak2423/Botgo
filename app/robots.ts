export default function robots() {
   return {
      rules: [
         {
            userAgent: '*',
         },
      ],
      sitemap: 'https://botgo.vercel.app/sitemap.xml',
      host: 'https://botgo.vercel.app',
   };
}