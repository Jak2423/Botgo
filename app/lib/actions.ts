import { Course } from "./definitions";


export async function getCourses() {
   try {
      const data = (await import('./courses-data.json')).default as Course[];
      // const countOfCourses = data.length;
      return data;
   } catch (error) {
      throw new Error('Failed to fetch courses.');
   }
}

export async function getFilteredCourses(query: string, only_lecture: boolean) {
   try {
      let data = (await import('./courses-data.json')).default as Course[];

      if (only_lecture) {
         data = data.filter(
            (course: Course) =>
               course.credit === 3 &&
               course.lecture_credit !== '-' &&
               course.seminar_credit === '-' &&
               course.lab_credit === '-' &&
               course.degree_level === 'Бакалавр',
            // (course.semester === 'Улирал харгалзахгүй' || course.semester === 'Хаврын улирал'),
         );
      }

      const filteredCourses = data.filter((course: Course) =>
         course.mn_name.toLowerCase().includes(query.toLowerCase()),
      );

      return filteredCourses;
   } catch (error) {
      throw new Error('Failed to fetch courses.');
   }
}

export async function getCourseById(id: string) {
   try {
      const data = (await import('./courses-data.json')).default as Course[];
      const course = data.find((course: Course) => course.id === id);

      return course;
   } catch (error) {
      throw new Error('Failed to fetch course by id.');
   }
}