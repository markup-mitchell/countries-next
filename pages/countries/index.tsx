export const getStaticProps = async () => {
  const res = await fetch( "https://restcountries.com/v2/all" );
  const countries = await res.json()

  return {
    props: { countries: countries }
  }
}

const Countries = ({countries}) => {
  return countries.map(country => <div key={country.alpha2Code}>{country.name}</div>)
}

export default Countries