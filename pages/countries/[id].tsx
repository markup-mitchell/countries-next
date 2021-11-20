
import { GetStaticProps } from 'next'

  // TODO
  // Interface/type for country
  // Interface/type for params


// This function gets called at build time
export async function getStaticPaths() {
  // Get all the countries
  const res = await fetch( "https://restcountries.com/v2/all" );
  const countries = await res.json()

  // Get the paths we want to pre-render based on  countries
  const paths = countries.map((country) => ({
    params: { id: country.name },
  }))

  // console.log(paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}



// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  // params contains the country `id`.
  // If the route is like /countries/France, then params.id is France
  const res = await fetch(`https://restcountries.com/v2/name/${params.id}`);
  const countryArray = await res.json();
  // The API returns results as an array - I guess because it can be searched by partial name for multiple matches
  const country = await countryArray[0];

  // Pass post data to the page via props
  // console.log(await country[0])
  return { props: { country } }
}

function Country({country}) {
  return (
    <div>
    <h1>Country Name: {country.name}</h1>
    <img src={country.flag} alt={`flag of ${country.name}`} />
    </div>
  )
}
export default Country