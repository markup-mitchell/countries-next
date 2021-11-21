import Image from 'next/image';

const CountryPageHeading = ({ title, image }) => {
	return (
		<>
			<div className="heading-row">
				<h1>{title}</h1>
				<div className="flag-wrapper">
					<Image src={image} layout="fill" objectFit="contain" />
				</div>
			</div>
			<style jsx>
				{`
					h1 {
						margin: 0;
					}
					.heading-row {
						display: flex;
						justify-content: space-between;
					}

					@media (min-width: 900px) {
						.heading-row {
							justify-content: unset;
						}
					}
					.flag-wrapper {
						position: relative;
						width: 100px;
					}
				`}
			</style>
		</>
	);
};

export default CountryPageHeading;
