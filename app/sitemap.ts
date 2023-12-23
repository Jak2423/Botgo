import { getCourses } from "./lib/actions";

export default async function sitemap() {
   let courses = (await getCourses()).map((course) => ({
      url: `https://botgo.vercel.app/courses/${course.id}`,
   }));

   let routes = [''].map((route) => ({
      url: `https://botgo.vercel.app${route}`,
      lastModified: new Date().toISOString().split('T')[0],
   }));

   return [...routes, ...courses];
}