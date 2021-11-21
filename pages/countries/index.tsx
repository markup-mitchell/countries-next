import Layout from '../../components/Layout';

export const getStaticProps = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countries = await res.json();

	return {
		props: { countries: countries },
	};
};

const Countries = ({ countries }) => {
	return (
		<Layout>
			{countries.map((country) => (
				<div key={country.cca2}>{country.name.common}</div>
			))}
		</Layout>
	);
};

export default Countries;
