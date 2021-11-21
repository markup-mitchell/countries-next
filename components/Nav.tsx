import Link from 'next/link';

const Nav = () => {
	return (
		<>
			<div className="nav-wrapper">
				<nav>
					<Link href="/">
						<a>HOME</a>
					</Link>
				</nav>
			</div>

			<style jsx>
				{`
					nav {
						max-width: 900px;
						margin-right: auto;
						margin-left: auto;
						font-size: 1.5rem;
					}
					.nav-wrapper {
						background-color: var(--color__200);
						color: white;
						padding: var(--standard-padding);
					}
				`}
			</style>
		</>
	);
};

export default Nav;
