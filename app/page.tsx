import { Suspense } from 'react';
import ScrollableCourses from './components/scroll-courses';
import Search from './components/search';

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		only_lecture?: boolean;
	};
}) {
	const query = searchParams?.query || '';
	const only_lecture = searchParams?.only_lecture || false;

	return (
		<div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-4 no-scrollbar'>
			<Search />
			<Suspense key={query}>
				<ScrollableCourses query={query} only_lecture={only_lecture} />
			</Suspense>
		</div>
	);
}
