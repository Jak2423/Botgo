import Link from "next/link";
import { getFilteredCourses } from "../lib/actions";
import { Course } from "../lib/definitions";

export default async function ScrollableCourses({
  query,
  sort,
  currentPage,
}: {
  query: string;
  sort: string;
  currentPage: number;
}) {
  const courses = await getFilteredCourses(query, currentPage, sort);

  return (
    <div className="mt-8 w-full md:min-w-[42rem]">
      {courses.length ? (
        courses.map((course: Course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <div className="mb-8 w-full">
              <div className="flex flex-col justify-between md:flex-row">
                <h2 className="mb-2 text-lg font-medium text-gray-900 transition-all ease-linear hover:translate-x-1 dark:text-gray-100 md:text-xl">
                  {course.mn_name}
                </h2>
                <p className="mb-2 w-32 text-left text-gray-500 md:mb-0 md:text-right">
                  {course.course_index}
                </p>
              </div>
              <div className="hidden w-full flex-col items-start justify-between md:flex md:flex-row md:items-center">
                <p className="text-md text-grey-700 dark:text-gray-300 ">
                  {course.course_index} / {course.degree_level}
                </p>
                <p className="text-md text-grey-700 mt-2 dark:text-gray-300 md:mt-0">
                  Багц цаг: {course.credit}
                </p>
              </div>
              <hr className="border-gray-200 dark:border-gray-800 md:my-4" />
            </div>
          </Link>
        ))
      ) : (
        <p className="px-4 py-2 text-gray-600 dark:text-gray-400">
          Хайлт олдсонгүй :&#40;
        </p>
      )}
    </div>
  );
}
