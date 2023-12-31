'use client';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const sort = searchParams.get('sort') || '';

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		params.delete('page');
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 100);

	const createFilterURL = (filter: string) => {
		const params = new URLSearchParams(searchParams);
		params.delete('page');

		if (filter !== '') {
			params.set('sort', filter.toString());
		} else {
			params.delete('sort');
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className='flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 w-full mb-10'>
			<div className='flex-1 relative w-full'>
				<input
					className='w-full rounded-md py-2 pl-4 pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 hover:border-gray-400 dark:hover:border-gray-500 outline-none'
					type='text'
					placeholder='Хичээлийн нэрээр хайх...'
					defaultValue={searchParams.get('query')?.toString()}
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<div className='absolute top-0 right-0 flex items-center justify-center h-full px-2'>
					<MagnifyingGlassIcon className='w-4 h-4 text-gray-400' />
				</div>
			</div>
			<div className='relative sm:flex-shrink-0'>
				<select
					className='appearance-none w-full items-center justify-between text-ellipsis rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700  hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-gray-100 py-2 px-4 sm:flex sm:w-48'
					defaultValue={sort}
					onChange={(e) => createFilterURL(e.target.value)}
				>
					<option value=''>Бүх хичээл</option>
					<option value='general'>Ерөнхий суурь</option>
					<option value='only_lecture'>Дан лекц</option>
				</select>
				<div className='absolute top-0 right-0 flex items-center justify-center h-full px-2'>
					<ChevronDownIcon className='w-3 h-3' />
				</div>
			</div>
			{/* <label className='relative inline-flex items-center cursor-pointer mb-4'>
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
			</label> */}
		</div>
	);
}
