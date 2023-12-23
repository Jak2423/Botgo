import { Metadata, Viewport } from 'next';
import Navbar from './components/navbar';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Botgo',
	description: 'МУИС-ийн хичээлүүд',
	robots: 'follow, index',
	keywords: ['num', 'courses', 'муис хичээл', 'хичээл сонголт', 'муис', 'botgo'],
	icons: {
		icon: '/images/favicon.ico',
		apple: '/images/apple-touch-icon.png',
	},
	manifest: '/images/site.webmanifest',
	verification: {
		google: 'i8w_m0VgzzulNs1g3UM1Wkhs5vs-stgtqTkaDJFj_VA',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{
			color: '#111111',
			media: '(prefers-color-scheme: dark)',
		},
		{
			color: '#f9fafb',
			media: '(prefers-color-scheme: light)',
		},
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='leading-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white'>
				<Providers>
					<div className='min-h-[calc(100vh-96px)] no-scrollbar'>
						<Navbar />
						<main className='flex flex-col justify-center px-8'>{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
