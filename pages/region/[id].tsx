import Link from 'next/link'

export async function getStaticPaths() {
  const paths = [
    {params: {id: 'Africa'}},
    {params: {id: 'Americas'}},
    {params: {id: 'Asia'}},
    {params: {id: 'Europe'}},
    {params: {id: 'Oceania'}}
  ]
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  // console.log(params)
  const res = await fetch(`https://restcountries.com/v3.1/region/${params.id}`);
  const region = await res.json();
  // console.log(region)
  return { props: { region } }
}

function Region({region}) {
  return (
    <ul>

    {region.map(country => <li key={country.cca2}>
      <Link href={`/countries/${country.cca2}`}>
      <a>{country.name.common}</a>
      </Link>
      </li>
  )}
    </ul>
  )}
export default Region;