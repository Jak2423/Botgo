import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-white md:text-7xl">
        404
      </h1>
      <p className="mb-20 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mx-auto w-56 rounded-md bg-gray-200 p-2 text-center font-bold text-black dark:bg-gray-800 dark:text-white sm:p-4"
      >
        Return Home
      </Link>
    </div>
  );
}
