import { getCourseById } from "@/app/lib/actions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
        {course.mn_name}
      </h1>
      <section className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <p className="text-md text-grey-700 dark:text-gray-300">
          {course.course_index} / {course.degree_level}
        </p>
        <p className="text-md text-grey-700 mt-2 dark:text-gray-300 md:mt-0">
          Багц цаг: {course.credit}
        </p>
      </section>
      <section className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <p className="text-md text-grey-700 dark:text-gray-300">
          {course.department}
        </p>
        <p className="text-md text-grey-700 mt-2 dark:text-gray-300 md:mt-0">
          {course.semester}
        </p>
      </section>
      <section className="mt-8 w-full">
        <div className="mb-8 border-l-2 border-gray-200 pl-4 text-gray-800 dark:border-gray-700 dark:text-gray-300">
          <p>Лекц: {course.lecture_credit}</p>
          <p>Семинар: {course.seminar_credit}</p>
          <p>Лаборатори: {course.lab_credit}</p>
          <p>Бие даалт: {course.assignment_credit}</p>
        </div>
        <h2 className="mb-4 text-2xl font-bold">Зорилго</h2>
        <p className="mb-8 leading-relaxed tracking-wider text-gray-800 dark:text-gray-300">
          {course.purpose}
        </p>
        <h2 className="mb-4 text-2xl font-bold">Товч агуулга</h2>
        <p className=" leading-relaxed tracking-wider text-gray-800 dark:text-gray-300">
          {course.summary}
        </p>
        <hr className="my-12 border-gray-200 dark:border-gray-800" />
      </section>
    </article>
  );
}
