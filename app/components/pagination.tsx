"use client";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactElement } from "react";
import { generatePagination } from "../lib/util";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        icon={<ChevronDoubleLeftIcon className="w-4" />}
        direction="left"
        href={createPageURL(1)}
        isDisabled={currentPage <= 1}
      />
      <PaginationArrow
        icon={<ChevronLeftIcon className="w-4" />}
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex space-x-1">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          //  if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        icon={<ChevronRightIcon className="w-4" />}
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
      <PaginationArrow
        icon={<ChevronDoubleRightIcon className="w-4" />}
        direction="right"
        href={createPageURL(totalPages)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex w-9 h-9 items-center justify-center text-sm rounded-md",
    {
      "z-10 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 border-2":
        isActive,
      "hover:bg-gray-200 dark:hover:bg-gray-800":
        !isActive && position !== "middle",
      "text-gray-300 dark:text-gray-700": position === "middle",
    },
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  icon,
  href,
  direction,
  isDisabled,
}: {
  icon: ReactElement;
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(
    "flex w-9 h-9 items-center justify-center rounded-md",
    {
      "hidden pointer-events-none text-gray-300 dark:text-gray-700": isDisabled,
      "hover:bg-gray-200 dark:hover:bg-gray-800": !isDisabled,
      "mr-1": direction === "left",
      "ml-1": direction === "right",
    },
  );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
