import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';

export async function getStaticPaths() {
	const paths = [
		{ params: { id: 'Africa' } },
		{ params: { id: 'Americas' } },
		{ params: { id: 'Asia' } },
		{ params: { id: 'Europe' } },
		{ params: { id: 'Oceania' } },
	];
	return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`https://restcountries.com/v3.1/region/${params.id}`);
	const region = await res.json();
	return { props: { region } };
};

function Region({ region }) {
	return (
		<>
			<Head>
				<title>CWorld Countries | {region[0].region}</title>
				<meta name="description" content="UI for countries REST API" />
			</Head>
			<Layout>
				<h1>{region[0].region}</h1>
				<ul>
					{region.map((country) => (
						<li key={country.cca2}>
							<Link href={`/countries/${country.cca2}`}>
								<a>{country.name.common}</a>
							</Link>
						</li>
					))}
				</ul>
			</Layout>
		</>
	);
}
export default Region;
