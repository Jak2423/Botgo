const createSitemap = (id) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${id
				.map((id) => {
					return `
                <url>
                    <loc>${`https://botgo.vercel.app/${id}`}</loc>
                </url>
            `;
				})
				.join('')}
    </urlset>
`;
export async function getServerSideProps({ res }) {
	const allCourses = (await import('../lib/courses.json')).default;
	const allPages = [
		...allCourses.map((course) => `courses/${course.id}`),
		...['', 'courses'],
	];

	res.setHeader('Content-Type', 'text/xml');
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=1200, stale-while-revalidate=600',
	);
	res.write(createSitemap(allPages));
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {
	return null;
}
