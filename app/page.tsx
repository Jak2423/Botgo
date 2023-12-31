import { Suspense } from "react";
import Pagination from "./components/pagination";
import ScrollableCourses from "./components/scroll-courses";
import Search from "./components/search";
import { CoursesSkeleton } from "./components/steletons";
import { getCoursesPages } from "./lib/actions";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getCoursesPages(query, sort);

  return (
    <div className="no-scrollbar mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center">
      <Search />
      <Suspense key={query + currentPage} fallback={<CoursesSkeleton />}>
        <ScrollableCourses
          query={query}
          currentPage={currentPage}
          sort={sort}
        />
      </Suspense>
      <div className="mb-8 mt-2 flex w-full items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
