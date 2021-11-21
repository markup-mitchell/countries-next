import Link from 'next/link';
import Layout from '../components/Layout';

function HomePage() {
	return (
		<Layout>
			<ul>
				<li>
					<Link href="/region/Africa">
						<a>Africa</a>
					</Link>
				</li>
				<li>
					<Link href="/region/Americas">
						<a>Americas</a>
					</Link>
				</li>
				<li>
					<Link href="/region/Asia">
						<a>Asia</a>
					</Link>
				</li>
				<li>
					<Link href="/region/Europe">
						<a>Europe</a>
					</Link>
				</li>
				<li>
					<Link href="/region/Oceania">
						<a>Oceania</a>
					</Link>
				</li>
			</ul>
		</Layout>
	);
}

export default HomePage;
