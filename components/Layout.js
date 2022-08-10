import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Botgo</title>
        <meta name='title' content='Botgo' />
        <meta name='keywords' content='NUM Courses' />
        <meta name='description' content='МУИС-ийн хичээлийн хайлтын систем' />
      </Head>
      <Navbar />
      <main className='flex flex-col justify-center px-8'>{children}</main>
      <footer className='absolute bottom-0 left-0 right-0 h-[100px]'>
        <Footer />
      </footer>
    </div>
  );
}
