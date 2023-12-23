'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const onlyLecture = Boolean(searchParams.get('only_lecture')) || false;

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	const createFilterURL = (filter: boolean) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (filter) {
			params.set('only_lecture', filter.toString());
		} else {
			params.delete('only_lecture');
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className='flex flex-col w-full mb-10'>
			<div className='relative w-full sm:max-w-sm mb-4'>
				<input
					className='rounded-md w-full py-2 pl-4 pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 hover:border-gray-400 dark:hover:border-gray-500 outline-none'
					type='text'
					placeholder='Хичээлийн нэрээр хайх...'
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<div className='absolute top-0 right-0 flex items-center justify-center h-full px-2'>
					<MagnifyingGlassIcon className='w-5 h-5 text-gray-400' />
				</div>
			</div>
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					type='checkbox'
					className='sr-only peer'
					onChange={(e) => createFilterURL(e.target.checked)}
					defaultChecked={onlyLecture}
				/>
				<div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
				<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
					Дан лекц
				</span>
			</label>
		</div>
	);
}
