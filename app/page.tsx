import { Suspense } from 'react';
import Pagination from './components/pagination';
import ScrollableCourses from './components/scroll-courses';
import Search from './components/search';
import { getCoursesPages } from './lib/actions';

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		only_lecture?: boolean;
		page?: string;
	};
}) {
	const query = searchParams?.query || '';
	const only_lecture = searchParams?.only_lecture || false;
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await getCoursesPages(query, only_lecture);

	return (
		<div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-4 no-scrollbar'>
			<Search />
			<Suspense key={query + currentPage}>
				<ScrollableCourses
					query={query}
					currentPage={currentPage}
					only_lecture={only_lecture}
				/>
			</Suspense>
			<div className=' flex w-full justify-center items-center mb-8'>
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	);
}
