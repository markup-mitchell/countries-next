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
  console.log(params)
  const res = await fetch(`https://restcountries.com/v3.1/region/${params.id}`);
  const region = await res.json();
  console.log(region)
  return { props: { region } }
}

function Region({region}) {
  return (
    region.map(country => <Link href={`/countries/${country.cca2}`}>
      <a>{country.name.common}</a>
      </Link>)
  )
}
export default Region;