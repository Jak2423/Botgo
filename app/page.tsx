import { Suspense } from 'react';
import Pagination from './components/pagination';
import ScrollableCourses from './components/scroll-courses';
import Search from './components/search';
import { CoursesSkeleton } from './components/steletons';
import { getCoursesPages } from './lib/actions';

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		sort?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || '';
	const sort = searchParams?.sort || '';
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await getCoursesPages(query, sort);

	return (
		<div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-4 no-scrollbar'>
			<Search />
			<Suspense key={query + currentPage} fallback={<CoursesSkeleton />}>
				<ScrollableCourses query={query} currentPage={currentPage} sort={sort} />
			</Suspense>
			<div className='flex w-full justify-center items-center mt-2 mb-8'>
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	);
}
