import { Course } from "./definitions";

export async function getCourses() {
   try {
      let data = (await import('./courses-data.json')).default as Course[];

      return data;
   } catch (error) {
      throw new Error('Failed to fetch courses.');
   }
}


const ITEMS_PER_PAGE = 20;
export async function getFilteredCourses(query: string, currentPage: number, only_lecture: boolean) {
   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
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

      if (query !== '') {
         data = data.filter((course: Course) =>
            course.mn_name.toLowerCase().includes(query.toLowerCase()),
         );
      }

      return data.slice(offset, offset + ITEMS_PER_PAGE);
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


export async function getCoursesPages(query: string, only_lecture: boolean) {
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

      if (query !== '') {
         data = data.filter((course: Course) =>
            course.mn_name.toLowerCase().includes(query.toLowerCase()),
         );
      }

      const totalPages = Math.ceil(Number(data.length) / ITEMS_PER_PAGE);

      return totalPages;
   } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
   }
}