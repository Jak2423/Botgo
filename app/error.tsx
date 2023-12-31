"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center">
      <p className="mb-20 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
        Oh no, something went wrong... maybe refresh?
      </p>
    </div>
  );
}
