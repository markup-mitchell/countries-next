import Image from 'next/image';
import Head from 'next/head';

import CountryPageHeading from '../../components/CountryPageHeading';
import Layout from '../../components/Layout';

// This function gets called at build time
export async function getStaticPaths() {
	// Get all the countries
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countries = await res.json();

	// Get the paths we want to pre-render based on  countries
	const paths = countries.map((country) => ({
		params: { id: country.cca2 },
	}));

	// console.log(paths)
	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
	// console.log(params)
	// params contains the country `id`.
	// If the route is like /countries/France, then params.id is France
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);
	const countryArray = await res.json();
	// The API returns results as an array - I guess because it can be searched by partial name for multiple matches
	const country = await countryArray[0];

	// Pass post data to the page via props
	// console.log(await country[0])
	return { props: { country } };
};

function Country({ country }) {
	return (
		<>
			<Head>
				<title>Country Details | {country.name.common}</title>
			</Head>
			<Layout>
				<CountryPageHeading
					title={country.name.common}
					image={country.flags.svg}
				/>
				<p>
					<span className="datum-label">Official Name</span>
					<span className="datum-text">{country.altSpellings[1]}</span>
				</p>
				{/* <p>Native Name: {country.name[Object.keys(country.name.nativeName)[0]]}</p> */}
				<p>
					<span className="datum-label">Japanese Name</span>
					<span className="datum-text">
						{country.translations.jpn
							? country.translations.jpn.official
							: null}
					</span>
				</p>

				<p>
					<span className="datum-label">Population Density</span>
					<span className="datum-text">
						{Math.floor(country.population / country.area)} per km<sup>2</sup>
					</span>
				</p>
				<div className="flag-wrapper">
					<Image
						alt={`Flag of ${country.name.common}`}
						src={country.flags.svg}
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<style jsx>{`
					.datum-text {
						font-size: 2.5rem;
						display: block;
					}
					.datum-label {
						font-size: 2rem;
						font-variation-settings: 'wght' 350;
					}

					p {
						margin-bottom: 2rem;
					}

					.flag-wrapper {
						display: flex;
						position: relative;
						width: 100%;
						height: 250px;
					}
				`}</style>
			</Layout>
		</>
	);
}
export default Country;
