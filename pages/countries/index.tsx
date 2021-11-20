export const getStaticProps = async () => {
  const res = await fetch( "https://restcountries.com/v3.1/all" );
  const countries = await res.json()

  return {
    props: { countries: countries }
  }
}

const Countries = ({countries}) => {
  return countries.map(country => <div key={country.cca2}>{country.name.common}</div>)
}

export default Countries