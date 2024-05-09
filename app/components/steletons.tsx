export function CourseSkeleton() {
  return (
    <div className="mb-8  w-full">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="mb-2 h-7 w-1/2 rounded-xl bg-gray-300 dark:bg-gray-800" />
        <div className="mb-2 h-5 w-20 rounded-xl bg-gray-300 dark:bg-gray-800 md:mb-0" />
      </div>
      <div className="hidden w-full flex-col items-start justify-between md:flex md:flex-row md:items-center">
        <div className="h-5 w-36 rounded-xl bg-gray-200 dark:bg-gray-700" />
        <div className="mt-2 h-5 w-24 rounded-xl bg-gray-200 dark:bg-gray-700 md:mt-0" />
      </div>
      <hr className="border-gray-200 dark:border-gray-800 md:my-4" />
    </div>
  );
}

export function CoursesSkeleton() {
  return (
    <div className="mt-8 w-full md:min-w-[42rem]">
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
      <CourseSkeleton />
    </div>
  );
}
