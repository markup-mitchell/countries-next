import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<div className="page-wrapper">
			<Nav></Nav>
			<div className="page">
				<main>{children}</main>
			</div>
			<style jsx>{`
				.page-wrapper {
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					background: var(--color__900);
				}
				.page {
					color: var(--color__100);
					justify-content: center;
					padding: var(--standard-padding);
				}
				main {
					width: 100%;
					max-width: 900px;
					margin-top: 1rem;
				}
			`}</style>
		</div>
	);
};

export default Layout;
