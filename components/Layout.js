import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, viewport-fit=cover'
				/>
				<title>Botgo</title>
				<meta name='title' content='Botgo' />
				<meta
					name='keywords'
					content='num, courses, муис хичээл, хичээл сонголт, муис, botgo'
				/>
				<meta name='description' content='МУИС-ийн хичээлийн хайлтын систем' />
				<meta
					name='google-site-verification'
					content='i8w_m0VgzzulNs1g3UM1Wkhs5vs-stgtqTkaDJFj_VA'
				/>
				<meta name='robots' content='follow, index' />
			</Head>
			<div className='min-h-[calc(100vh-96px)]'>
				<Navbar />
				<main className='flex flex-col justify-center px-8'>{children}</main>
			</div>
			<Footer />
		</>
	);
}
