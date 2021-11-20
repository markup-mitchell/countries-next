import Image from 'next/image';

const CountryPageHeading= ({title, image}) => {
  return (
    <h1>{title}<Image src={image} layout="fill"/></h1>
  )
}

export default CountryPageHeading;